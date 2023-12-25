class personagem{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        let ataque;
    
        switch (this.tipo){
            case 'mago':
            ataque = 'usou magia';
            break;
    
            case 'guerreiro':
            ataque = 'usou espada';
            break
    
            case 'monge':
            ataque = 'usou artes marciais'
            break
            
            case 'ninja':
            ataque = 'usou shuriken'
            break
    
            default:
            ataque ='usou ataque genérico'
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }
}

const heroiMago = new personagem ('harry potter', 100, 'mago')
const heroiGuerreiro = new personagem ('rambo', 50, 'guerreiro')
const heroiMonge = new personagem ('jet li', 20, 'monge')
const heroiNinja = new personagem ('raizo', 10, 'ninja')

heroiMago.atacar()
heroiGuerreiro.atacar()
heroiMonge.atacar()
heroiNinja.atacar()



