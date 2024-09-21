<!-- @license CC0-1.0 -->

# PDF

Table moet opgebouwd worden met de volgende tags:

- `<Table>` voor de Table.
- `<Caption>` voor een Table Caption.
- `<THead>` voor een Table Header.
- `<TBody>` voor een Table Footer.
- `<TFooter>` voor een Table Footer.
- `<TR>` voor een Table Row.
- `<TH>` voor een Table Heading Cell.
- `<TD>` voor een Table Cell met data.

```text
<Table> {
  <Caption> {
    "Table caption"
  }
  <THead> {
    <TR> {
      <TH> {
        "Column 1"
      }
      <TH> {
        "Column 2"
      }
      <TH> {
        "Column 3"
      }
    }
  }
  <TBody> {
    <TR> {
      <TD> {
        "Column 1"
      }
      <TD> {
        "Column 2"
      }
      <TD> {
        "Column 3"
      }
    }
  }
  <TFoot> {
    <TR> {
      <TD> {
        "Column 1"
      }
      <TD> {
        "Column 2"
      }
      <TD> {
        "Column 3"
      }
    }
  }
}
```
