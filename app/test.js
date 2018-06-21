import { tokenize } from './lexer';
import Parser from './parser'

const patterns = new Map()
    .set('FUNC' , ['função'   ])
    .set('DO'   , ['faz'      ])
    .set('END'  , ['fim'      ])
    .set('IDENT', ['[a-zA-Z]+'])
    .set('NUM'  , ['[0-9]+'])
    .set('WS'   , ['\\s'      , false])


let tokens = tokenize(`
    teste
`, patterns)

let parser = new Parser()
        .setTokens(tokens)
        .setTerminals('FUNC DO END IDENT RPAR LPAR NUM')
        .setNonTerminals('program expr')
        .setRootSymbol('program')

        .addRule('program' , 'expr')

        // .addRule('expr'    , 'IDENT '=' NUM', $(1, 3))
        .addRule('expr'    , 'IDENT'        , [1])
        // .addRule('expr'    , 'NUM'          , $(1))


console.log(tokens)
console.log(parser.getAST())
