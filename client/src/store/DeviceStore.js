import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'galaxy'},
            {id: 2, name: 'phone'}
        ]
        this._brands = [
            {id: 1, name: 'samsung'},
            {id: 2, name: 'iphone'}
        ]
        this._devices = [
            {id: 1, name: '2 super', price: 10000, rating: 5}
        ]
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

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}