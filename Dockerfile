FROM mhart/alpine-node:16.4

ARG TZ=Europe/Amsterdam
ENV TZ Europe/Amsterdam

# Use `--no-cache` to get a smaller image, by removing unused files afterwards.
# The packages are sorted, one per line, to have better diffs in Git.
RUN \
    apk add --no-cache \
        bash \
        git \
        nano \
    && command -v bash \
    && command -v git \
    && command -v nano \
    && echo "$TZ" > /etc/timezone

ENV SHELL /bin/bash

ARG NPM_REGISTRY
ARG NPM_STRICT_SSL

RUN git config --global credential.helper 'cache' \
    && ( test "${NPM_STRICT_SSL}" && npm config set strict-ssl "${NPM_STRICT_SSL}" || true ) \
    && ( test "${NPM_REGISTRY}" && npm config set registry "${NPM_REGISTRY}" || true ) \
    && ( test "${HTTP_PROXY}" && npm config set proxy "${HTTP_PROXY}" || true ) \
    && ( test "${HTTP_PROXY}" && npm config set http-proxy "${HTTP_PROXY}" || true ) \
    && ( test "${HTTPS_PROXY}" && npm config set https-proxy "${HTTPS_PROXY}" || true ) \
    && npm cache clean --force 2> /dev/null

RUN mkdir -p /var/www \
    && addgroup -g 1000 node \
    && adduser \
        -D \
        -G node \
        -h /var/www \
        -s /bin/sh \
        -u 1000 \
        node \
    && chown -R node:node /var/www

USER node

WORKDIR /var/www

ARG NODE_ENV
ARG NPM_TOKEN
ARG HUSKY_SKIP_INSTALL=true

ADD --chown=node:node ./ /var/www/

# For development, install `devDependencies`.

RUN if test "$NODE_ENV" = 'development'; \
then \
    npm config set "//registry.npmjs.org/:_authToken" "${NPM_TOKEN}" \
    && npm install \
    && npm config set "//registry.npmjs.org/:_authToken" "" \
    && npm cache clean --force 2> /dev/null \
; fi

# After building the application, remove the `devDependencies`
# for when NODE_ENV is "production" using a production mode install,
# leaving only the packages needed for production.

RUN if test "$NODE_ENV" != 'development'; \
then \
    npm config set "//registry.npmjs.org/:_authToken" "${NPM_TOKEN}" \
    && npm install \
    && npm run build \
    && npm config set "//registry.npmjs.org/:_authToken" "" \
    && npm cache clean --force 2> /dev/null \
; fi

# Build and remove the devDependencies in one Docker layer to keep image size small
# For production, install `devDependencies` to be able to execute `npm run build`,
# but remove the `devDependencies` immediately afterwards to keep the Docker layer small.

ARG BUILD_DATE
ARG VCS_REF
ARG VERSION

LABEL \
    org.label-schema.build-date="${BUILD_DATE}" \
    org.label-schema.description="Storybook for Utrecht Design System" \
    org.label-schema.name="utrecht-storybook" \
    org.label-schema.schema-version="1.0" \
    org.label-schema.url="https://github.com/nl-design-system/utrecht" \
    org.label-schema.usage="https://github.com/nl-design-system/utrecht/blob/master/README.md" \
    org.label-schema.vcs-ref="${VCS_REF}" \
    org.label-schema.vcs-url="https://github.com/nl-design-system/utrecht" \
    org.label-schema.vendor="Municipality of Utrecht" \
    org.label-schema.version="${VERSION}"

# Add lowercase proxy settings for compatibility,
# but use uppercase exports for shellcheck compatibility.
# https://unix.stackexchange.com/a/212972
ENV \
    HTTP_PROXY=$HTTP_PROXY \
    HTTPS_PROXY=$HTTPS_PROXY \
    NO_PROXY=$NO_PROXY \
    http_proxy=$HTTP_PROXY \
    https_proxy=$HTTPS_PROXY \
    no_proxy=$NO_PROXY

ENTRYPOINT ["npm", "run"]

CMD ["start"]
