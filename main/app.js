function addTokens(input, tokens){
    // ex 1
    if(!(typeof input === 'string')) {
        throw new Error("Invalid input");
    }

    // ex 2
    if(input.length < 6) {
        throw new Error("Input should have at least 6 characters");
    }

    // ex 3
    for(var i=0; i<tokens.length; i++) {
        if(!(tokens[i].hasOwnProperty("tokenName") && typeof (tokens[i])["tokenName"] === 'string')) {
            throw new Error("Invalid array format");
        }
    }
    

    // ex 4
    if(!(input.includes("..."))) {
        return input;
    }
    //ex 5
    else {
        var i = 0;
        var s = "${" + tokens[i]["tokenName"] + "}";
        while(i < tokens.length) {
            input = input.replace("...", s);
            i++;
        }
        return input;
    }
    
}

const app = {
    addTokens: addTokens
}

module.exports = app;

/*input = "Subsemnatul ..."
tokens = [{tokenName:"Roxy"}]

console.log(addTokens(input, tokens));*/
