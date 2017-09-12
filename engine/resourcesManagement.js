class ResourcesManagement{
    constructor(){
        this._resources = this._getResourcesFromDb();
    }

    get getResources(){
        return this._resources;
    }

    _getResourcesFromDb(){
        //sc88:this will have to return resourced from DB automatically
        return fakeResources;
    }
}


var fakeResources = {
    wood: 100,
    stone: 100
}