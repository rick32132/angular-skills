import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  color: string;
  constructor(private httpClient: HttpClient) {
      this.color = ""
   }

  ngOnInit() {
  }

  onLike(){
    this.card.likes++;
    if(this.card.likes > 5){
      this.color = "primary"
    }
    if(this.card.likes > 10){
      this.color = "warn"
    }
    return this.httpClient.put(`/api/skills/${this.card.id}`,this.card, cudOptions);
  }

  onShare(card: any){
    // TODO: abrir o link do seu linkedin
  }

}
