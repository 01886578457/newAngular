import { Component } from "@angular/core";
@Component({
  selector: "app-words",
  template: `
    <div>
        <button *ngIf="!showForm" (click) = "toogleForm()">+</button>
        <div *ngIf="showForm">
            
            <input [(ngModel)] ="en" placeholder="english word"/><br/>
            <input [(ngModel)] ="def" placeholder="definition"/>
            <div>
                <button (click) = "addWord();">Add word</button>
                <button (click) = "toogleForm()">Cancle </button>
            </div>
        </div>
        <div *ngFor= " let w of words">
            <h2>{{w.en}}</h2>
            <p>{{w.remember ? "*****" : w.def}}</p>
            <div>
                <button (click)="toggleWord(w._id)">{{w.remember ? "Forgot" : "Remember"}}</button>
                <button (click)="removeWord(w._id)">Remove</button>
            </div>
        </div>
    </div>
    `
})
export class WordsComponent {
  words = [
    {
      _id: "1",
      en: "abuse",
      def: "the use of something in a way that is wrong or harmful",
      remember: true
    },
    {
      _id: "2",
      en: "accent",
      def:
        "a way of pronouncing the words of a language that shows which country, area, or social class a person comes from",
      remember: false
    },
    {
      _id: "3",
      en: "academic",
      def:
        "connected with education, especially studying in colleges and universities",
      remember: true
    },
    {
      _id: "4",
      en: "accuse ",
      def:
        "to say that someone has done something wrong or is guilty of something",
      remember: true
    }
  ];
  en = "";
  def = "";
  showForm= false;
  toogleForm = () =>{
      this.showForm = !this.showForm;
  }
  toggleWord = _id => {
    const w = this.words.find(word => word._id === _id);
    w.remember = !w.remember;
  };
  removeWord = _id => {
    const index = this.words.findIndex(word => word._id === _id);
    this.words.splice(index, 1);
  };
  addWord = () => {
    if (this.en.trim() === "" || this.def.trim() === "") {
      return;
    }
    const word = {
      _id: Date.now() + "",
      en: this.en,
      def: this.def,
      remember: false
    };
    this.words.push(word);
    this.en = "";
    this.def = "";
    this.toogleForm();
  };
}
