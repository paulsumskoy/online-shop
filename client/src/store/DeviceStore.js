import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Phone'},
            {id: 2, name: 'Notebook'},
            {id: 3, name: 'TV'},
            {id: 4, name: 'Fridge'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Dell'},
            {id: 4, name: 'MSI'},
        ]
        this._devices = [
            {id: 1, name: '2 super', price: 10000, rating: 5},
            {id: 2, name: '2 super', price: 10000, rating: 5},
            {id: 3, name: '2 super', price: 10000, rating: 5},
            {id: 4, name: '2 super', price: 10000, rating: 5},
            {id: 5, name: '2 super', price: 10000, rating: 5},
            {id: 6, name: '2 super', price: 10000, rating: 5},
            {id: 7, name: '2 super', price: 10000, rating: 5},
            {id: 8, name: '2 super', price: 10000, rating: 5},
            {id: 9, name: '2 super', price: 10000, rating: 5},

        ]
        this._selectedType = {}
        this._selectedBrand ={}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}