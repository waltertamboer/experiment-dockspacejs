import { DockPane, DockSpace, HtmlRenderer, Renderer, TabbarHtmlRenderer } from '@waltertamboer/dockspace-js';

function buildDiv(renderer: Renderer, pane: DockPane): HTMLDivElement {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.left = '0px';
    div.style.right = '0px';
    div.style.top = '0px';
    div.style.bottom = '0px';

    const content = document.createElement('div');
    content.setAttribute('class', 'content');
    div.appendChild(content);

    return div;
}

function runApp(): void {
    const targetElement = document.getElementById('container');

    if (!targetElement) {
        throw new Error("Failed to find element with id 'container'.");
    }

    const dockSpace = new DockSpace();

    const pane1 = dockSpace.createPane(new (class extends TabbarHtmlRenderer {
        protected getHeaderLabel(renderer: HtmlRenderer, pane: DockPane): string {
            return 'Pane ' + pane.id.toString();
        }

        protected renderTab(renderer: HtmlRenderer, parentElement: HTMLElement, pane: DockPane): void {
            const div = buildDiv(renderer, pane);

            div.style.backgroundColor = '#ff5151';

            parentElement.appendChild(div);
        }
    })(dockSpace));

    const pane2 = dockSpace.createPane(new (class extends TabbarHtmlRenderer {
        protected getHeaderLabel(renderer: HtmlRenderer, pane: DockPane): string {
            return 'Pane ' + pane.id.toString();
        }

        protected renderTab(renderer: HtmlRenderer, parentElement: HTMLElement, pane: DockPane): void {
            const div = buildDiv(renderer, pane);

            div.style.backgroundColor = '#ffe0a2';

            parentElement.appendChild(div);
        }
    })(dockSpace));

    const pane3 = dockSpace.createPane(new (class extends TabbarHtmlRenderer {
        protected getHeaderLabel(renderer: HtmlRenderer, pane: DockPane): string {
            return 'Pane ' + pane.id.toString();
        }

        protected renderTab(renderer: HtmlRenderer, parentElement: HTMLElement, pane: DockPane): void {
            const div = buildDiv(renderer, pane);

            div.style.backgroundColor = 'cornflowerblue';

            parentElement.appendChild(div);
        }
    })(dockSpace));

    const rowContainer1 = dockSpace.createRowContainer();

    const pane4 = dockSpace.createPane(new (class extends TabbarHtmlRenderer {
        protected getHeaderLabel(renderer: HtmlRenderer, pane: DockPane): string {
            return 'Pane ' + pane.id.toString();
        }

        protected renderTab(renderer: HtmlRenderer, parentElement: HTMLElement, pane: DockPane): void {
            const div = buildDiv(renderer, pane);

            div.style.backgroundColor = '#c441ce';

            parentElement.appendChild(div);
        }
    })(dockSpace));

    const pane5 = dockSpace.createPane(new (class extends TabbarHtmlRenderer {
        protected getHeaderLabel(renderer: HtmlRenderer, pane: DockPane): string {
            return 'Pane ' + pane.id.toString();
        }

        protected renderTab(renderer: HtmlRenderer, parentElement: HTMLElement, pane: DockPane): void {
            const div = buildDiv(renderer, pane);

            div.style.backgroundColor = 'pink';

            parentElement.appendChild(div);
        }
    })(dockSpace));

    rowContainer1.growFactor = 4;
    rowContainer1.append(pane4);
    rowContainer1.append(pane5);

    dockSpace.container.append(pane1);
    dockSpace.container.append(pane2);
    dockSpace.container.append(rowContainer1);

    const renderer = new HtmlRenderer(targetElement, dockSpace);
    renderer.interactive = true;
    renderer.splitterSize = 5;
    renderer.refresh();

    dockSpace.container.append(pane3);

    // setTimeout(function () {
    //     dockSpace.container.removePane(pane3);
    //     rowContainer1.removePane(pane5);
    //     dockSpace.refresh();
    // }, 3000);
}

window.addEventListener('DOMContentLoaded', () => {
    runApp();
});
