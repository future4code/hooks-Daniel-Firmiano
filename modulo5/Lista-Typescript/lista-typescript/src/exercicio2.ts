function variaveis (variavel:any) {
    if (typeof variavel === "number"){
        return "tipo numérico"
    }else if (typeof variavel === "string"){
        return "tipo texto"
    }else if (typeof variavel === "boolean"){
        return "tipo boleano"
    }else if(typeof variavel === "object"){
        return "tipo objeto"
    }else if(typeof variavel === "function"){
        return "tipo função"
    }else if(typeof variavel === "undefined"){
        return "tipo indefinido"
    }
}

console.log(variaveis(""))