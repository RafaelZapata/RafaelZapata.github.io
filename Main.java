class MenuItem {
 
    String nome;
     
    MenuItem(String nome) {
        this.nome = nome;
    }
     
}
 
interface Iterator {
    boolean hasNext();
    Object next();
}
 
class MenuIterator implements Iterator {
 
    MenuItem[] itens;
    int posicao = 0;
     
    public MenuIterator(MenuItem[] itens) {
        this.itens = itens;
    }
     
    public Object next() {
        MenuItem menuItem = itens[posicao];
        posicao++;
        return menuItem;
    }
     
    public boolean hasNext() {
        if (posicao >= itens.length || itens[posicao] == null) {
            return false;
        } else {
            return true;
        }
    }
     
}

public class Main {
    public static void main(String args []) {
        MenuItem [] menuItens = new MenuItem[4];
         
        menuItens[0] = new MenuItem("Menu 1");
        menuItens[1] = new MenuItem("Menu 2");
        menuItens[2] = new MenuItem("Menu 3");
        menuItens[3] = new MenuItem("Menu 4");
         
        Iterator menuIterator = new MenuIterator(menuItens);
         
        while (menuIterator.hasNext()) {
            MenuItem menuItem = (MenuItem)menuIterator.next();
            System.out.println(menuItem.nome);
        }
    }
}