export default class Parser {

    constructor() {
        this.rules = []
        this.tokens = []
        this.rootSymbol = null
        this.terminals = []
        this.nonTerminals = []
    }

    addRule(name, rule, callback = null) {
        this.rules.push({ name, rule, callback })
        return this
    }

    setTokens(tokens) {
        this.tokens = tokens
        return this
    }

    setTerminals(terminals) {
        this.terminals = terminals.split(" ").filter(x => x.trim() != '')
        return this
    }

    setNonTerminals(nonTerminals) {
        this.nonTerminals = nonTerminals.split(" ").filter(x => x.trim() != '')
        return this
    }

    setRootSymbol(root) {
        this.rootSymbol = root
        return this
    }

    getAST() {
        throw new Error("Function `getAST` was not implemented yet.")
    }

}