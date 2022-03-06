const convertDateToString = (date) => {
    let dateString = null;
    if(date) {
        dateString = new Date(date * 1000).toLocaleDateString('en-US', {
            hour: 'numeric',
            minute: 'numeric'
        });
    }
    return dateString;
}

export { convertDateToString };