import modelService from '../services/modelService.js';

const getModels = async (req, res, next) => {
    try {
        const data = await modelService.getModels();
        res.send(data);
        next();
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
}

const getModel = async (req, res, next) => {
    try {
        const data = await modelService.getModel(req.params["id"]);
        res.send(data);
        next();
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
}

const addModel = async (req, res, next) => {
    const model = {
        name: req.body.name,
        description: req.body.description,
        photopath: req.files[0]?.path ?? req.file.path,
        filepath: req.files[1]?.path
    };
    
    try {
        const data = await modelService.addModel(model);
        res.send(data);
        next();
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
}

const editModel = async (req, res, next) => {
    const model = {
        id: req.params["id"],
        name: req.body.name,
        description: req.body.description,
        photopath: req.files[0]?.path ?? req.file.path,
        filepath: req.files[1]?.path
    };
    
    try {
        const data = await modelService.editModel(model);
        res.send(data);
        next();
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
}

const deleteModel = async (req, res, next) => {
    try {
        const data = await modelService.deleteModel(req.params["id"]);
        res.send(data);
        next();
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
}


export default {
    getModels,
    getModel,
    addModel,
    editModel,
    deleteModel
}