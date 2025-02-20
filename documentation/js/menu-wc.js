'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">project-root documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ParkingModule.html" data-type="entity-link" >ParkingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ParkingModule-8f8349250b957b0d81e888dcebe71a7d8e98b41f14fac70580d795e04e757ba1d3b4af753df257dbeb338831f779f78046166fb3020f72d13a74a2e5ea232544"' : 'data-bs-target="#xs-controllers-links-module-ParkingModule-8f8349250b957b0d81e888dcebe71a7d8e98b41f14fac70580d795e04e757ba1d3b4af753df257dbeb338831f779f78046166fb3020f72d13a74a2e5ea232544"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ParkingModule-8f8349250b957b0d81e888dcebe71a7d8e98b41f14fac70580d795e04e757ba1d3b4af753df257dbeb338831f779f78046166fb3020f72d13a74a2e5ea232544"' :
                                            'id="xs-controllers-links-module-ParkingModule-8f8349250b957b0d81e888dcebe71a7d8e98b41f14fac70580d795e04e757ba1d3b4af753df257dbeb338831f779f78046166fb3020f72d13a74a2e5ea232544"' }>
                                            <li class="link">
                                                <a href="controllers/ParkingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParkingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ParkingModule-8f8349250b957b0d81e888dcebe71a7d8e98b41f14fac70580d795e04e757ba1d3b4af753df257dbeb338831f779f78046166fb3020f72d13a74a2e5ea232544"' : 'data-bs-target="#xs-injectables-links-module-ParkingModule-8f8349250b957b0d81e888dcebe71a7d8e98b41f14fac70580d795e04e757ba1d3b4af753df257dbeb338831f779f78046166fb3020f72d13a74a2e5ea232544"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ParkingModule-8f8349250b957b0d81e888dcebe71a7d8e98b41f14fac70580d795e04e757ba1d3b4af753df257dbeb338831f779f78046166fb3020f72d13a74a2e5ea232544"' :
                                        'id="xs-injectables-links-module-ParkingModule-8f8349250b957b0d81e888dcebe71a7d8e98b41f14fac70580d795e04e757ba1d3b4af753df257dbeb338831f779f78046166fb3020f72d13a74a2e5ea232544"' }>
                                        <li class="link">
                                            <a href="injectables/ParkingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParkingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ParkingModule.html" data-type="entity-link" >ParkingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ParkingModule-e0e5b04ce8f273f6e598a722112a767b9708c615540265e50ce6f5405d366c406e5b930e5437645f3ea569d65fc0ab57df8d3c8635f82a93777290508b210aec-1"' : 'data-bs-target="#xs-controllers-links-module-ParkingModule-e0e5b04ce8f273f6e598a722112a767b9708c615540265e50ce6f5405d366c406e5b930e5437645f3ea569d65fc0ab57df8d3c8635f82a93777290508b210aec-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ParkingModule-e0e5b04ce8f273f6e598a722112a767b9708c615540265e50ce6f5405d366c406e5b930e5437645f3ea569d65fc0ab57df8d3c8635f82a93777290508b210aec-1"' :
                                            'id="xs-controllers-links-module-ParkingModule-e0e5b04ce8f273f6e598a722112a767b9708c615540265e50ce6f5405d366c406e5b930e5437645f3ea569d65fc0ab57df8d3c8635f82a93777290508b210aec-1"' }>
                                            <li class="link">
                                                <a href="controllers/ParkingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParkingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ParkingModule-e0e5b04ce8f273f6e598a722112a767b9708c615540265e50ce6f5405d366c406e5b930e5437645f3ea569d65fc0ab57df8d3c8635f82a93777290508b210aec-1"' : 'data-bs-target="#xs-injectables-links-module-ParkingModule-e0e5b04ce8f273f6e598a722112a767b9708c615540265e50ce6f5405d366c406e5b930e5437645f3ea569d65fc0ab57df8d3c8635f82a93777290508b210aec-1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ParkingModule-e0e5b04ce8f273f6e598a722112a767b9708c615540265e50ce6f5405d366c406e5b930e5437645f3ea569d65fc0ab57df8d3c8635f82a93777290508b210aec-1"' :
                                        'id="xs-injectables-links-module-ParkingModule-e0e5b04ce8f273f6e598a722112a767b9708c615540265e50ce6f5405d366c406e5b930e5437645f3ea569d65fc0ab57df8d3c8635f82a93777290508b210aec-1"' }>
                                        <li class="link">
                                            <a href="injectables/ParkingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParkingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AllocatedSlotResponseDto.html" data-type="entity-link" >AllocatedSlotResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClearSlotByNumberDto.html" data-type="entity-link" >ClearSlotByNumberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClearSlotByRegNoDto.html" data-type="entity-link" >ClearSlotByRegNoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClearSlotDto.html" data-type="entity-link" >ClearSlotDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateParkingDto.html" data-type="entity-link" >CreateParkingDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FreedSlotResponseDto.html" data-type="entity-link" >FreedSlotResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncrementParkingLotDto.html" data-type="entity-link" >IncrementParkingLotDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncrementSlotDto.html" data-type="entity-link" >IncrementSlotDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/InitializeParkingLotDto.html" data-type="entity-link" >InitializeParkingLotDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParkCarDto.html" data-type="entity-link" >ParkCarDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParkCarDto-1.html" data-type="entity-link" >ParkCarDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParkingLotResponseDto.html" data-type="entity-link" >ParkingLotResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParkingStatusResponseDto.html" data-type="entity-link" >ParkingStatusResponseDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ParkedCar.html" data-type="entity-link" >ParkedCar</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ParkingLot.html" data-type="entity-link" >ParkingLot</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});