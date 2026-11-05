// React in productiemodus: dezelfde HTML, zonder de ontwikkelwaarschuwingen van de stories in de buildlog.
// Een eigen module, zodat dit gebeurt voordat een andere import React laadt.
import process from 'node:process';

process.env['NODE_ENV'] ??= 'production';
