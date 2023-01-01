export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault() // nao redireciona ao clicar nos links
    
        window.history.pushState({}, "", event.target.href)  // adiciona o href do target que disparou o evento no histórico
    
        this.handle()
    }

    handle() {
        const { pathname } = window.location // (desestruturando o protótipo)
        //  const pathname = window.location.pathname -> outra maneira de pegar o pathname
    
        const route = this.routes[pathname] || this.routes[404]
    
        fetch(route)
            .then(data => data.text())
            .then(html => {
                document.querySelector(".app").innerHTML = html
        })
    }

}