const numbersList = Array
    .from(Array(49))
    .map((value, index) => ++index)
    .map(value => ({
        id: value,
        name: value,
    }));

export default numbersList;