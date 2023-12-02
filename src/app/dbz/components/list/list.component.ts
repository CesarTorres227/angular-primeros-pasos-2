import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDelte: EventEmitter<Character> = new EventEmitter();

  onDeleteCharacter(data: Character): void {
    //TODO: Emitir los datos del personaje
    if(!data.id) return;
    this.onDelte.emit(data);

  }

 }
