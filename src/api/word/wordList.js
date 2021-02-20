/**
 * Created by lk on 17/6/4.
 */
import axios from "../../utils/axios";

// 谁最懂我相关

// 列表
export function wordList(query) {
    return axios({
        url: "/admin/word/wordlist",
        method: "post",
        params: query
    });
}


// 列表
export function wordListType() {
    return axios({
        url: "/admin/word/getTypes",
        method: "post"
    });
}

export function setY(id,method = "post") {
    var url = "admin/word/yes";
    return axios({
        url: url,
        method: method,
        params: {id:id}
    });
}


export function translate(en,method = "get") {
    var url = "translate";
    return axios({
        url: url,
        method: method,
        params: {en:en}
    });
}


export  function setD(id,method = "post") {
    var url = "admin/word/setD/"+id;
    return  axios({
        url: url,
        method: method
    });
}

export  function setN(id,method = "post") {
    var url = "admin/word/no/"+id;
    return  axios({
        url: url,
        method: method
    });
}

export  function setV(id,method = "post") {
    var url = "admin/word/setv/"+id;
    return  axios({
        url: url,
        method: method
    });
}

export  function updateWord(id,en,cn,method = "post") {
    var url = "admin/word/updateWord/"+id;
    return  axios({
        url: url,
        method: method,
        params: {en:en,cn:cn}
    });
}



// 保存
export function adSave(data, formName, method = "post") {
    var url = formName === "add" ? "/admin/ad/ad/save" : "/admin/ad/ad/edit";
    return axios({
        url: url,
        method: method,
        data: data
    });
}

// 删除
export function adDelete(data) {
    return axios({
        url: "/admin/ad/ad/delete",
        method: "post",
        data: data
    });
}
