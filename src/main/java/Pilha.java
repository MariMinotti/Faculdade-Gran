public class Pilha{
  private Object elemento;   ///aqui elemento é atributo, ou seja aqui é a caixa do correio
  private int quantidade = 0;

  public Pilha(int capacidade) {
  }

  public boolean estaVazia(){
    return quantidade ==0;
  }
  public int tamanho(){
    return quantidade;
  }
  public void empilhar(Object item){  ///item é parâmetro, ou seja, aqui é o pacote da entrega 
    this.quantidade = 1;
  }
}