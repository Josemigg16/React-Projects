export const formatDate = date => {
    const dateObj = new Date(date)
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return dateObj.toLocaleDateString('en-US', options)
}