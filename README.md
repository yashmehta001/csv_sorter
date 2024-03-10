# CSV Sorter

This Node.js script sorts a CSV file named `input.csv` by the values in the second column in descending order and saves the sorted data to a file named `output.csv`.

## Prerequisites

- Node.js version 18 or higher

## Usage

1. Place your CSV file named `input.csv` in the same directory as the script.
2. Run the following command in your terminal:

   ```sh
   npm start
   ```

3. The sorted data will be saved to a file named `output.csv` in the same directory.

## Example

Input CSV (`input.csv`):

```
Name,Score
Alice,85
Bob,92
Charlie,78
David,
Eve,96
```

Output CSV (`output.csv`):

```
Name,Score
Eve,96
Bob,92
Alice,85
Charlie,78
David,
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.