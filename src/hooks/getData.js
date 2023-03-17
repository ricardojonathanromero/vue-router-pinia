import Axios from "axios";
import { ref } from "vue";

export const useGetData = () => {

    const data = ref(null);

    const currentUrl = ref('');

    const loading = ref(true);

    const getData = async (url) => {
        loading.value = true;
        currentUrl.value = url;
        try {
            const res = await Axios.get(url);
            if (res.status !== 200) {
                console.error('error from pokemon details', res);
                return
            }

            data.value = res.data;
        } catch (e) {
            console.error(e);
        } finally {
            loading.value = false;
        }
    }

    return {
        getData,
        data,
        loading,
        currentUrl,
    }
}
