import Backend from '../models/backend';

export async function saveBackend(req, res) {

    try {
        let valor1 = parseInt(req.params.valor1);
        let valor2 = parseInt(req.params.valor2);
        let resultado = valor1 + valor2;
        
        const newAdition = await Backend.create({
            valor1,
            valor2,
            result
        }, {
                fields: ['valor1', 'valor2', 'resultado']
            });
        res.json({ message: 'New Task created' });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something Goes Wrong. Try Again.',
            data: {},
        })
    }
    res.json('received');
};
