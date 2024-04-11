const { createApp } = Vue;

createApp({
    data() {
        return {
            heroi: { vida: 100 },
            vilao: { vida: 100 },
            gameOver: false
        };
    },
    methods: {
        atacar(isHeroi) {
            if (isHeroi) {
                console.log("Heroi atacou")
                this.vilao.vida -= 10;
                this.verificarGameOver(this.vilao);
                this.acaoVilao();
            } else {
                this.heroi.vida -= 10;
                this.verificarGameOver(this.heroi);
            }
        },
        defender(isHeroi) {
            if(isHeroi){
                console.log("Heroi defendeu")
                this.heroi.vida += 0;
                this.verificarGameOver(this.vilao);
                this.acaoVilao
                

            } else {
                console.log("Defesa falhou")
                this.heroi.vida -= 5;
                this.verificarGameOver(this.heroi);
                


            }
        },
        usarPocao(isHeroi) {
            if (isHeroi) {
                console.log("Heroi usou a poção")
                this.heroi.vida += 2.5;
                this.verificarGameOver(this.vilao);
            } else {
                
                this.acaoVilao();
                this.verificarGameOver(this.heroi);
            }
            
        },
        correr(isHeroi) {
            if (isHeroi) {
            alert ('Herói correu!! Ele é um cagão')
            this.gameOver
            window.location.reload();
                
            }
        },
        acaoVilao() {
            const acoes = ['atacar', 'defender', 'usarPocao', 'correr'];
            const acaoAleatoria = acoes[Math.floor(Math.random() * acoes.length)];
            this[acaoAleatoria](false);
        },
        verificarGameOver(personagem) {
            if (personagem.vida <= 0) {
                this.gameOver = true;
                alert(`${personagem === this.heroi ? 'Herói' : 'Vilão'} morreu!`);
            }
        }
    },
    computed: {
        heroiMorreu() {
            return this.heroi.vida <= 0;
        },
        vilaoMorreu() {
            return this.vilao.vida <= 0;
        }
    },
    watch: {
        heroiMorreu(value) {
            if (value) {
                alert('Herói morreu!');
                window.location.reload();
            }
        },
        vilaoMorreu(value) {
            if (value) {
                alert('Vilão morreu!');
                window.location.reload();
            }
        },
        gameOver(value) {
            if (value) {
                alert('Fim de jogo!');
                window.location.reload();
            }
        }
    }
}).mount("#app");
