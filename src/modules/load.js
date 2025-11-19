import getData from "./getData";
import renderGoods from "./renderGoods";
import counterGoods from "./counterGoods";

const load = () => {
    counterGoods()

    getData().then((data) => {
        renderGoods(data)
    });
}

export default load