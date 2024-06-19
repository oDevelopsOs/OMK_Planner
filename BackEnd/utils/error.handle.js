export const handleHttp = (res, error) => {
        if (!res.headersSent) {
            res.status(500).json({ error: error.message || 'Internal Server Error' });
        }
    };
    