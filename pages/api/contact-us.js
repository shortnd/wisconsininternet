export default (req, res) => {
    if (req.method === 'POST') {
        return res.status(200).json({
            method: 'POST'
        })
    } else {
        return res.status(200).json({
            method: 'GET'
        })
    }
}