function main(){
    requestComponent("./src/components/header/header-component.html", "<!-- {{header}} -->");
    requestComponent("./src/components/sidebar/sidebar-component.html", "<!-- {{sidebar}} -->");
    requestComponent("./src/components/container/container-component.html", "<!-- {{container}} -->");
}