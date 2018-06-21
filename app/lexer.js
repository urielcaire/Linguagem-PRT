/**
 * @author Vitor "Pliavi" Silvério
 * @desc Recebe um texto e alguns padrões (Regex ou literais)
 *       e retorna um conjunto de tokens
 * @param {String} string Texto a ser compilado
 * @param {Map<String, String|Function>} patterns Padrões a serem buscados
 * @returns {[{type: String, val: String}]} Conjunto contendo os tokens com tipo e valor
 */
export function tokenize(string, patterns) {
    let tokens = new Array
    
    while(string) {
        let token

        for (const [name, [pattern, transform = true]] of patterns) {
            let value = RegExp(`^${pattern}`).exec(string)
            
            if(value) {
                value = (typeof transform == 'function') 
                        ? tranform(value[0]) 
                        : value[0] 

                if (transform !== false)
                    token = {
                        type: name,
                        value: value
                        // TODO: Adicionar a linha a partir do \\n
                    }

                string = string.slice(value.length)
                break
            }
        }
        
        if(token) tokens.push(token)
    }

    return tokens
}
