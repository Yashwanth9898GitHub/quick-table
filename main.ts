class TablePrint {
    printTable(tableNumber: number): string 
    {
        let result = '';
        for (let count=1; count<=10; count++) 
        {
            result += `${tableNumber} * ${count} = ${tableNumber * count}<br>`;
        }
        return result;
    }
}

function generateTable(): void 
{
    const input = document.getElementById('inputNumber') as HTMLInputElement;
    const output = document.getElementById('output') as HTMLDivElement;
    const value = parseInt(input.value);    

    if (!isNaN(value) && input.value.trim().length <= 16) 
    //if(!isNaN(value))
    {
        const table = new TablePrint();
        output.innerHTML = table.printTable(value);
    }
    else
    {
        output.innerHTML = "Please enter a valid number (1-16 digits).";
    }
}

// Make it globally accessible for button onclick
(window as any).generateTable = generateTable;
