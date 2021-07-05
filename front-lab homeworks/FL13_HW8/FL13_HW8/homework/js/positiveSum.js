const positiveSum = (arrayOfNum) => {
    return (arrayOfNum.reduce((sum, element) => element >= 0 ? sum + element : sum, 0));
}
positiveSum([0, -3, 5, 8]);