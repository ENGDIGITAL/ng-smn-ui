import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {UiToolbarService} from '../../../../projects/smn-ui/src/lib/toolbar/toolbar.service';

@Component({
    selector: 'ui-demo-autocomplete',
    templateUrl: './demo-autocomplete.component.html',
    styleUrls: ['./demo-autocomplete.component.scss']
})
export class DemoAutocompleteComponent implements OnInit, AfterViewInit, OnDestroy {

    states: string[];
    statesFiltered: string[];
    allStates: any[];
    searchState;
    loading;
    timing;
    allStatesFiltered: any[];
    teste;
    searchAllState;
    select;

    constructor(public toolbarService: UiToolbarService) {
        this.states = ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Brasília Amarela'];
        this.allStates = [{
            name: 'São Paulo',
            country: 'Brazil'
        }, {
            name: 'Rio de janeiro',
            country: 'Brazil'
        }, {
            name: 'New York',
            country: 'USA'
        }, {
            name: 'Florida',
            country: 'USA'
        }, {
            name: 'Virginia',
            country: 'USA'
        }, {
            name: 'Ohio',
            country: 'USA'
        }];
        this.statesFiltered = this.states;
        this.allStatesFiltered = this.allStates;

    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.toolbarService.activateExtendedToolbar(960);
    }

    ngOnDestroy() {
        this.toolbarService.deactivateExtendedToolbar();
    }

    teste2(item) {
        console.log(item);
        console.log(this);
    }

    loadMore() {
        if (this.teste) {
            return;
        }

        this.teste = true;

        this.allStatesFiltered = [...this.allStates, ...[{
            name: 'Brasilia',
            country: 'Brazil'
        }, {
            name: 'Santa catarina',
            country: 'Brazil'
        }, {
            name: 'Malibu',
            country: 'USA'
        }, {
            name: 'Dublin',
            country: 'Irland'
        }, {
            name: 'Galway',
            country: 'Irland'
        }, {
            name: 'Tokio',
            country: 'Japan'
        }]];
        console.log('teste');
    }

    search() {
        clearInterval(this.timing);

        this.loading = true;

        this.timing = setTimeout(() => {
            this.loading = false;
            if (!this.searchState) {
                this.statesFiltered = this.states;
                return;
            }
            this.statesFiltered = this.states.filter(item => {
                return (item.indexOf(this.searchState) !== -1);
            });
        }, 300);
    }

    searchAll() {
        clearInterval(this.timing);

        this.loading = true;

        this.timing = setTimeout(() => {
            this.loading = false;
            if (!this.searchState) {
                this.allStatesFiltered = this.allStates;
                return;
            }
            this.allStatesFiltered = this.allStates.filter(item => {
                return (item.name.indexOf(this.searchState) !== -1);
            });
        }, 300);
    }
}
