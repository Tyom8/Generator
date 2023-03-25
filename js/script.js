function* generateQuestions(questions){
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        yield question;
    }
}

class Game {
    hallttt = true;
    callttt = true;
    ttt = true;
    count = 0;
    constructor(playerName){
        this.playerName = playerName;
        const ques = [
            new Question("Հարց 1 - Մարդու ուղեղը մոտավորապես քանի՞ տոկոսով է բաղկացած ջրից:" + "   a.20%" + "    b.30%" + "    c.70%" + "    d.80%", new Answer(["d","b","c","a"])),
            new Question("Հարց 2 - Ո՞վ ունի այնպիսի մատնահետք, ինչպիսին քոնն է:" + "   a.Ոչ ոք" + "    b.Մայրդ" + "    c.Հայրդ" + "    d.Պապիկդ", new Answer(["a","b","c","d"])),
            new Question("Հարց 3 - Որ քաղաքում է գտնվում կարմիր հրապարակը:" + "   a.Լոնդոն" + "    b.Մոսկվա" + "    c.Փարիզ" + "    d.Երևան", new Answer(["b","d","a","c"])),
            new Question("Հարց 4 - Որ թվականին է հայաստանը ընդունել քրիստոնեությունը" + "   a.304" + "    b.401" + "    c.301" + "    d.321", new Answer(["c","a","d","b"])),
            new Question("Հարց 5 - Ով է Տեսլայի հիմնադիրը:" + "   a.Ցուկենբեռգ" + "    b.Իլոն Մասկ" + "    c.Բռեդ Պիտ" + "    d.Տիգրան", new Answer(["b","d","c","a"])),
        ]
        this.questions  = generateQuestions(ques);
    }
    play(){
        alert("50/50 ic ogtvelu hamar patasxan dashtun greq 50,zang yngerojic ogtvelu hamar greq call,dahliji ognutyan hamar greq hall:")
        this.askQuestion();
    }
    askQuestion(question = null){

        if(question === null){
            question = this.questions.next();
        }
        
        let answer = prompt(question.value.question);
        // Fifty Fifty
        if(answer === '50' && this.ttt){
            this.ttt = false;
            answer = prompt(Help.fifty(question.value.answer));
            if(answer === question.value.answer.options[0]){
                this.count++
                let com = confirm(`Chisht e ,duq uneq ${this.count} miavor,ete cankanum eq sharunakel sexmeq "OK" ete voch "Cancel`);
                if (com === true) {
                    this.askQuestion();
                } else {
                    alert(`Duq heracel eq xaxic vastakelov ${this.count} miavor.`)
                }
            }else{
    
                this.gameOver()
            }
        } else if(answer === '50' && this.ttt === false) {
            alert("Duq arden ogtvel eq 50/50 ic");
            this.askQuestion(question);
        } 
        
        //Call Friend
        else   if(answer === 'call' && this.callttt){
            this.callttt = false;
            answer = prompt(`Dzer ynkeroj patasxann e "${Help.callFriend(question.value.answer)}" tarberak.`);
            if(answer === question.value.answer.options[0]){
                this.count++
                let com = confirm(`Chisht e ,duq uneq ${this.count} miavor,ete cankanum eq sharunakel sexmeq "OK" ete voch "Cancel`);
                if (com === true) {
                    this.askQuestion();
                } else {
                    alert(`Duq heracel eq xaxic vastakelov ${this.count} miavor.`)
                }
            }else{
    
                this.gameOver()
            }
        } else if(answer === 'call' && this.callttt === false) {
            alert("Duq arden ogtvel eq zang ynkeroj ognutyunic");
            this.askQuestion(question);
        }

        //HelpHall
        else   if(answer === 'hall' && this.hallttt){
            this.hallttt = false;
            answer = prompt(`Dahliji patasxann e "${Help.helphall(question.value.answer)}".`);
            if(answer === question.value.answer.options[0]){
                this.count++
                let com = confirm(`Chisht e ,duq uneq ${this.count} miavor,ete cankanum eq sharunakel sexmeq "OK" ete voch "Cancel`);
                if (com === true) {
                    this.askQuestion();
                } else {
                    alert(`Duq heracel eq xaxic vastakelov ${this.count} miavor.`)
                }
            }else{
    
                this.gameOver()
            }
        } else if(answer === 'hall' && this.hallttt === false) {
            alert("Duq arden ogtvel eq dahliji ognutyunic");
            this.askQuestion(question);
        }


        else if(answer === question.value.answer.options[0]){
            this.count++
            let com = confirm(`Chisht e ,duq uneq ${this.count} miavor,ete cankanum eq sharunakel sexmeq "OK" ete voch "Cancel`);
            if (com === true) {
                this.askQuestion();
            } else {
                alert(`Duq heracel eq xaxic vastakelov ${this.count} miavor.`)
            }
        }else{

            this.gameOver()
        }
    }
    finish(){
        
    }
    gameOver(){
        alert(`Sxal e duq partveciq vastakelov ${this.count} miavor.`)
    }
}
class Question {
    constructor(question,answer){
        this.question = question;
        this.answer = answer;
    }
}

class Answer {
    options=[];
    constructor(options){
        this.options = options
    }

}
class Help {
    static fifty(answer){
        const result = [];
        result.push(answer.options[0]);
        result.push(" or ");
        const randIndex = Math.floor(Math.random()*answer.options.length)
        if (randIndex > 0 && randIndex < 4) {
            result.push(answer.options[randIndex]);
        } else {
            result.push(answer.options[randIndex + 1]);
        }
        return  result
    };
    static callFriend (answer) {
        return answer.options[0]; 
    };
    static helphall(answer) {
        const hall = [];
        hall.push(`${answer.options[0]} (76%)  `);
        hall.push(`${answer.options[1]} (14%)  `);
        hall.push(`${answer.options[2]} (4%)  `);
        hall.push(`${answer.options[3]} (6%).`);
        return hall
    }
};

const milioner = new Game("Artyom");
milioner.play()