import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fighter } from '../fighter';
import { FighterService } from '../fighter.service';

@Component({
  selector: 'app-fighter-form',
  templateUrl: './fighter-form.component.html',
  styleUrls: ['./fighter-form.component.scss']
})
export class FighterFormComponent implements OnInit {
  @Input() fighter: Fighter;
  types: string[] | undefined;
  isAddForm: boolean;

  constructor(
    private fighterService: FighterService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.types = this.fighterService.getFighterTypeList();
    this.isAddForm = this.router.url.includes('add');
  }

  hasType(type: string): boolean {
    return this.fighter?.capacity?.includes(type) ?? false;
  }

  selectType($event: Event, type: string) {
    const isChecked = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.fighter?.capacity?.push(type);
    } else {
      const index = this.fighter?.capacity?.indexOf(type);
      if (index !== undefined && index >= 0) {
        this.fighter?.capacity?.splice(index, 1);
      }
    }
  }

  isTypesValid(type: string): boolean {
    if (this.fighter?.capacity?.length === 1 && this.hasType(type)) {
      return false;
    }

    if (this.fighter?.capacity?.length && this.fighter.capacity.length > 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  onSubmit() {
    if (this.isAddForm) {
      this.fighterService.addFighter(this.fighter)
        .subscribe((fighter: Fighter) => this.router.navigate(['/fighter', fighter.id]));
    } else {
      this.fighterService.updateFighter(this.fighter)
        .subscribe(() => this.router.navigate(['/fighter', this.fighter?.id]));
    }
  }

}
