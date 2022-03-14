"use strict";
exports.__esModule = true;
exports.EntityService = void 0;
var fs = require("fs");
var EntityService = /** @class */ (function () {
    function EntityService() {
        this.items = [];
        this.items = JSON.parse(fs.readFileSync(this.getFileName(), 'utf-8'));
    }
    /*Find the max id from the entities list*/
    EntityService.prototype.findMaxId = function () {
        var maxId = 0;
        this.items.forEach(function (item) {
            if (item.id !== undefined && item.id > maxId) {
                maxId = item.id;
            }
        });
        return maxId;
    };
    /*Get all the entities*/
    EntityService.prototype.getAll = function () {
        //Return  the items array
        return this.items;
    };
    /*Get the entity with the specific id*/
    EntityService.prototype.getById = function (id) {
        var entity = this.items.find(function (item) { return item.id === id; });
        if (entity != undefined) {
            //Return the entity with this id
            return entity; // ask this => <T>Object.assign({}, entity);
        }
        else {
            throw new Error("Cannot find entity with ID: ".concat(id));
        }
    };
    /*Adding a new entity to the entities list*/
    EntityService.prototype.add = function (entity) {
        if (entity.id === undefined) {
            entity.id = this.findMaxId() + 1;
        }
        //Add the new entity in the list
        this.items.push(entity);
        var data = JSON.stringify(this.items, null, 2);
        fs.writeFileSync(this.getFileName(), data);
        return entity;
    };
    /*Update an entity*/
    EntityService.prototype.update = function (entity) {
        var current = this.items.find(function (item) { return item.id == entity.id; });
        if (current !== undefined) {
            //Update the entity
            Object.assign(current, entity);
            return current;
        }
        else {
            throw new Error("Cannot update the  entity with ID: ".concat(entity.id));
        }
    };
    /* Delete one entity with the specific id*/
    EntityService.prototype["delete"] = function (id) {
        var index = this.items.findIndex(function (item) { return item.id === id; });
        if (index != -1) {
            this.items.splice(index, 1);
            var data = JSON.stringify(this.items, null, 2);
            fs.writeFileSync(this.getFileName(), data);
            return true;
        }
        else {
            //throw new Error(`Cannot delete entity with invalid ID: ${id}`);
            console.log("Cannot delete entity with invalid ID: ".concat(id));
            return false;
        }
    };
    /*This functions delets many entities*/
    EntityService.prototype.deleteMany = function (ids) {
        for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
            var id = ids_1[_i];
            if (this["delete"](id) == false) {
                return false;
            }
        }
        return true;
    };
    return EntityService;
}());
exports.EntityService = EntityService;
