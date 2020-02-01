abstract class Forma {
 
    protected Cor cor;
    
    public Forma(Cor c){
        this.cor = c;
    }
    
    abstract public void aplicarCor();
     
}
 
interface Cor {
    public void aplicandoCor();
}
 
class Triangulo extends Forma {
 
    public Triangulo(Cor c){
        super(c);
    }
    
    @Override
    public void aplicarCor(){
        System.out.print("Triangulo sendo preenchido com a cor ");
        cor.aplicandoCor();
    }
     
}

class Pentagono extends Forma {
 
    public Pentagono(Cor c){
        super(c);
    }
    
    @Override
    public void aplicarCor(){
        System.out.print("Pentagono sendo preenchido com a cor ");
        cor.aplicandoCor();
    }
     
}

class CorVermelha implements Cor{
    public void aplicandoCor(){
        System.out.print("vermelho");
    }
}

class CorVerde implements Cor{
    public void aplicandoCor(){
        System.out.print("verde");
    }
}

public class Main {
    public static void main(String args []) {
        Forma tri = new Triangulo(new CorVermelha());
        tri.aplicarCor();
        
        Forma pent = new Pentagono(new CorVerde());
        pent.aplicarCor();
    }
}