import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
public class PilhaTest {
  @Test
  public void pilhaVazia(){
    Pilha p = new Pilha(10);
    assertTrue(p.estaVazia());
    assertEquals(0, p.tamanho());
  }
  @Test
  public void empilharUmElemento(){
    Pilha p = new Pilha(10);
    p.empilhar("primeiro");
    assertFalse(p.estaVazia());
    assertEquals(1,p.tamanho());
  }
}