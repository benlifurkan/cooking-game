
/* exported highScoreList Transition  */
/* globals userArrayParse */


'use strict';


const highScoreData = window.localStorage.getItem('highScore');
let highScore = JSON.parse(highScoreData);

if(!highScore) {
    highScore = [];
}

const transitionTemplate = document.getElementById('transition-template');

class Transition {
    constructor(roundNumber, score, playerName, roundScore) {
        this.roundNumber = roundNumber;
        this.playerName = playerName;
        this.score = score;
        this.message = '';
        this.roundScore = roundScore;
    }
    
    render() {
        

        //if statement selects proper transition message based on score and round
        const dom = transitionTemplate.content.cloneNode(true);
        this.messageContainer = dom.getElementById('transition-message-container');
        this.messageSection = dom.querySelector('section');

        if(this.roundNumber === 1 && this.roundScore < 60){
            this.message = 'Tamam, devam etmek sorun değil ama daha iyisini yapabilirsin! Bir sonraki turda daha iyisini yapmalısın!';

        } else if(this.roundNumber === 1 && this.roundScore < 120) {
            this.message = 'Güzel iş, daha önce yemek pişirmiştin, ama bir sonraki turda gerçek bir rekabetle karşı karşıyasın!';

        } else if(this.roundNumber === 1 && this.roundScore <= 150) {
            this.message = 'Harika! Jüri üyesi olmalısınız - mükemmel bir yemek!';
        }
        
        if(this.roundNumber === 2 && this.roundScore < 60){
            this.message = 'Bu mutfakta kalacaksan bir üst seviyeye çıkmalısın!! Son tura geçelim!';

        } else if(this.roundNumber === 2 && this.roundScore < 120) {
            this.message = 'Orta... Fena değil... Ama bir sonraki tura geçmeye yetecek kadar iyi!';
            
        } else if(this.roundNumber === 2 && this.roundScore <= 150) {
            this.message = 'Profesyonel olmadığından emin misin? Bu yemek harika! Şimdi sırada final turu var!';
        }
        
        if(this.roundNumber === 3 && this.roundScore < 60) {
            this.message = 'Eve gitme vaktin geldi! Senin Şöhretler Müzesine uygun olduğunu sanmıyorum!';
            //pushes object into highScoreList array
            highScore.push({
                playerName: this.playerName,
                score: this.score
            });
            userArrayParse[2] = 1;
            userArrayParse[3] = 0;

        } else if(this.roundNumber === 3 && this.roundScore < 100) {
            this.message = '1 numaralı skor olmayabilirsin ama kendini gururlandırdın! Harika yemek pişirme becerileri!';
            //pushes object into highScoreList array
            highScore.push({
                playerName: this.playerName,
                score: this.score
            });
            userArrayParse[2] = 1;
            userArrayParse[3] = 0;
        } else if(this.roundNumber === 3 && this.roundScore <= 150) {
            this.message = 'Sen en iyilerdensin! Bu yemek seni kesinlikle Şöhretler Müzesine sokacak!';
            //pushes object into highScoreList array
            highScore.push({
                playerName: this.playerName,
                score: this.score
            });
            userArrayParse[2] = 1;
            userArrayParse[3] = 0;
        }
        this.transitionMessage = dom.querySelector('h2');
        this.transitionMessage.textContent = this.message;
        return dom;
    }
    clearTransitionMessage() {

        
        while(this.messageSection.lastElementChild) {
            this.messageSection.lastElementChild.remove();
        }
        this.transitionMessage.textContent = '';
    }
}