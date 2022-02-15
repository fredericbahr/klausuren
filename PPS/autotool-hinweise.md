# PPS - Autotool Hinweise

<!-- toc -->

- [Aufgabe 42-1 (Blockkommentar)](#aufgabe-42-1-blockkommentar)
- [Aufgabe 42-1 (regulaerer Ausdruck)](#aufgabe-42-1-regulaerer-ausdruck)
- [Aufgabe 42-3 (Formel -> Regexp)](#aufgabe-42-3-formel---regexp)
- [Aufgabe 43-1 (eindeutige CFG)](#aufgabe-43-1-eindeutige-cfg)
- [Aufgabe 43-2 (CFG a ungleich b)](#aufgabe-43-2-cfg-a-ungleich-b)
- [Aufgabe 47-1 (Nebenwirkungen)](#aufgabe-47-1-nebenwirkungen)
- [Aufgabe 49-1 (While -> Goto)](#aufgabe-49-1-while---goto)
- [Aufgabe 49-2 (Goto -> While)](#aufgabe-49-2-goto---while)
- [Aufgabe 51-2 (denotationale Semantik)](#aufgabe-51-2-denotationale-semantik)
- [Aufgabe 53-1 (Frames)](#aufgabe-53-1-frames)
- [Aufgabe 54-1 (Überladung auflösen)](#aufgabe-54-1-uberladung-auflosen)
- [Aufgabe 55-1 (Polymorphie)](#aufgabe-55-1-polymorphie)
- [Theorie](#theorie)
  * [Compiler-Schritte](#compiler-schritte)
  * [Hoare-Kalkül](#hoare-kalkul)
    + [Axiom fuer Zuweisung](#axiom-fuer-zuweisung)
    + [Axiom fuer die Simultanzuweisung](#axiom-fuer-die-simultanzuweisung)
    + [Axiom fuer logische Umformungen](#axiom-fuer-logische-umformungen)
    + [Axiom fuer Verzweigung](#axiom-fuer-verzweigung)
    + [Axiom fuer Schleifen](#axiom-fuer-schleifen)

<!-- tocstop -->

## Aufgabe 42-1 (Blockkommentar)

**Hinweis:**
- siehe regulärer Ausdruck
- Substition der eigentlichen Wörter mit Buchstaben

## Aufgabe 42-1 (regulaerer Ausdruck)
Vorlesung: [Skript](https://www.imn.htwk-leipzig.de/~waldmann/edu/ws21/pps/folien/#(25)), [Grundlagen](https://www.imn.htwk-leipzig.de/~waldmann/edu/ws21/pps/folien/#(21)), [weitere Literatur](https://www.imn.htwk-leipzig.de/~waldmann/edu/ws21/pps/folien/#(27))

Lösung: 
```
ab(a+c)^*b^*(c(a+c)^*b^*)^*ba
```


**Hinweise:**
- siehe autotool-test
- `a*b` bzw. `ab` &rarr; Verkettung &rarr; a und dann b
- `a+b` &rarr; Vereinigung &rarr; a oder b
- `^*` &rarr; Hülle &rarr; beliebig oft oder gar nicht

## Aufgabe 42-3 (Formel -> Regexp)

siehe Reguläre Ausdrücke 👆

Vorlesung: [Skript](https://www.imn.htwk-leipzig.de/~waldmann/edu/ws21/pps/folien/#(23))

Beispiel:

`forall p : ((a (p) => exists q : (((p < q) && b (q)))))`

&rarr; Für alle Stellen p gilt: Wenn an der Stelle ein a steht dann existiert eine Stelle q, für die gilt: die Stelle p ist vor (kleiner) der Stelle q und an der Stelle q steht ein b. 

Lösung:
```
((a^*c^*)^*bc^*)^*
```

**Prädikatenlogik**

- Implikation
    - Implikation &rarr; x => y &rarr; wenn x, dann y
    - Wenn x falsch ist, ist Implikation immer wahr
    - nur wenn x wahr ist, dann hängt Implikation von y ab
- Konjuktion
    - Und &rarr; x &and; y
- Disjunktion
    - Oder &rarr; x &or; y


**Hinweise:**
- es gibt Buchstaben innerhalb des Alphabetes &rarr; können in Wort vorkommen
- es gibt Buchstaben nicht im Alphabet &rarr; Positionen im Wort
- a (p) meint dabei eine **Position p** im Wort mit dem Buchstaben a
- b (q) meint dabei eine **Position q** im Wort mit dem Buchstaben b
- p < q &rarr; der Buchstabe a kommt vor dem Buchstaben b


## Aufgabe 43-1 (eindeutige CFG)
Vorlesung: [Skript1](https://www.imn.htwk-leipzig.de/~waldmann/edu/ws21/pps/folien/#(38)), [Skript2](https://www.imn.htwk-leipzig.de/~waldmann/edu/ws21/pps/folien/#(42)), [Skript3](https://www.imn.htwk-leipzig.de/~waldmann/edu/ws21/pps/folien/#(47))

Lösung:
```java
Grammatik
    { terminale = mkSet    "ab"
    , variablen = mkSet    "SAB"
    , start = 'S'
    , regeln = mkSet
                   [ ( "S", "")
                   , ( "S", "aBS")
                   , ( "S", "bAS")
                   , ( "A", "a")
                   , ( "A", "bAA")
                   , ( "B", "b")
                   , ( "B", "aBB")
                   ]
    }
```

**Grammatiken:**
- Terminal-Alphabet &Sigma;
- Variablen-Alphabet V
- Startsymbol S &isin; V
- Regelmenge R &SubsetEqual; (&Sigma; &cup; V)* x (&Sigma; &cup; V)*

**Eindeutigkeit:**
- es existiert nur ein Ableitungsbaum
- rand ist die Folge aller Blatt-Markierungen (von links nach rechts) &rarr; der Satz

## Aufgabe 43-2 (CFG a ungleich b)
Vorlesung: [Skript1](https://www.imn.htwk-leipzig.de/~waldmann/edu/ws21/pps/folien/#(38)), [Skript2](https://www.imn.htwk-leipzig.de/~waldmann/edu/ws21/pps/folien/#(42)), [Skript3](https://www.imn.htwk-leipzig.de/~waldmann/edu/ws21/pps/folien/#(47))

Lösung:
```java
Grammatik
    { terminale = mkSet    "ab"
    , variablen = mkSet    "SPQXAB"
    , start = 'S'
    , regeln = mkSet
                   [
                   ( "S", "P")
                   , ( "S", "Q")
                   , ( "P", "XAX")
                   , ( "P", "PP")
                   , ( "Q", "XBX")
                   , ( "Q", "QQ")
                   , ( "X", "aXb")
                   , ( "X", "bXa")
                   , ( "X", "XX")
                   , ( "X", "")
                   , ( "A", "aA")
                   , ( "A", "a")
                   , ( "B", "bB")
                   , ( "B", "b")
                   ] 
    }
```
Vorgehensweise:

 1. _start_ 



## Aufgabe 47-1 (Nebenwirkungen)
Vorlesung: [Skript](https://www.imn.htwk-leipzig.de/~waldmann/edu/ws21/pps/folien/#(139))
Lösung: 
``` java
int a = 5 ;
int [4] b = { 3, 2, -1, 5} ;
```
Vorgehensweise:

 1. Anweisungen kopieren und Online-Compiler einfügen
 2. Funktionsfähiges Programm erstellen
 3. Variablen ausgeben
 4. Verstehen oder Ausprobieren
	 5. Anfangsbelegungen anpassen

**Hinweis:**
- Siehe autotool-test (Skript zum automatischen Lösen)
- [JavaScript-Online-Editor](https://replit.com/languages/nodejs)
- [Java-Online-Editor](https://www.mycompiler.io/new/java)


## Aufgabe 49-1 (While -> Goto)
Vorlesung: [Skript](https://www.imn.htwk-leipzig.de/~waldmann/edu/ws21/pps/folien/#(182))
Lösung: 
```c
{
foo:
    if(!a)
        goto end;
    goto bar;

bar: 
    if(!b)
        goto foo;
    goto barInner;

barInner: 
    p;
    if(c)
        goto foo;
    q;
    if(c) 
        goto foo;
    r;
    goto bar;

end : skip;
}
```
Vorgehensweise:

 1. While-Schleifen identifizieren
 2. Programmablauf verstehen
 3. äußerste while-Schleife umwandeln
 4. Im Schleifenkörper Umwandlungen machen, falls möglich

**Hinweis:**
- Umwandlungssyntax &rarr; `while(B) A` &rarr; 
```
start: 	if (!B) goto end;
				A;
				goto start;
end: 		skip;
```
- wichtig sind die umschießenden Klammern ( **{ }** )

## Aufgabe 49-2 (Goto -> While)
Vorlesung: [Skript](https://www.imn.htwk-leipzig.de/~waldmann/edu/ws21/pps/folien/#(182))
Lösung:
```javascript
{
    i := true;

    while (b && i) {
        p;
        if (!c) {
            q;
            if(a) {
                i := false;
            }
        }
    }
}
```
Vorgehensweise:

 1. Programmablauf verstehen
 2. Umwandlung in **while**-Schleifen wenn die Form passt
 3. Anweisungen übernehmen, wenn die Umwandlung nicht möglich ist

**Hinweise:**
- Umwandlungssyntax &rarr; `while(B) A` &rarr; 
```
start: 	if (!B) goto end;
				A;
				goto start;
end: 		skip;
```
- Steuerung der while-Schleife mithilfe von **Variablen** &rarr; i := true
- Keine Variablen zusätzlich verwenden wenn diese nicht benötigt werden &rarr; Fehler
- Wichtig sind die umschließenden Klammern ( **{ }** )
## Aufgabe 51-2 (denotationale Semantik)
Vorlesung: [Skript](https://www.imn.htwk-leipzig.de/~waldmann/edu/ws21/pps/folien/#(193)), [weiterführende Literatur](https://www.imn.htwk-leipzig.de/~waldmann/edu/ws21/pps/folien/#(192))
Lösung:
- keine Lösung gefunden

Herangehensweise: 
 1. Wertetabelle erstellen &rarr; am besten durch Programm
 2. einzelne Parameter "einfrieren"
 3. Zusammenhänge erkennen

**Hinweis:**
- Vermutlich nicht prüfungsrelevant!

## Aufgabe 53-1 (Frames)
Vorlesung: [Skript](https://www.imn.htwk-leipzig.de/~waldmann/edu/ws21/pps/folien/#(210))
Lösung:
```javascript
{
    a = function() {b();};
    b = function() {
        c = function() {
            halt;
        };
        c();
    };
    a();
}
```
Vorgehensweise:

 1. Frames/Graphen zeichnen
 2. Aufgrund von statischen Vorgänger die textuellen Deklarationen der Funktion identifizieren
 3. Aufgrund des dynamischen Vorgängers Funktionen entsprechend aufrufen
	 4. Aufrufe auch per Parameter möglich
	 5. Aufrufe auch durch Rückgabe einer Funktion möglich

**Hinweis:**
- dynamischer Vorgänger &rarr; Frame des aufrufenden Unterprogramms/Funktion
- statischer Vorgänger &rarr; Frame des textuell umgebenen Unterprogramms in Code
- in Aufgabe ist **erster Frame** der **main**-Frame &rarr; die umrandende Klammer ( **{** )
- erster Frame hat Vorgänger zum OS
- Verwendung von **halt** &rarr; Beenden des Programmes
- Semikolons nicht vergessen: nach Aufruf, Deklaration
- **Rückgabe** von Funktionen durch Hinschreiben des names `f = function() {g;};`
- Funktionen können Parameter haben
- zurückgegebene Funktion kann beispielsweise so aufgrufen werden: `f()()`

## Aufgabe 54-1 (Überladung auflösen)
Vorlesung: [Skript](https://www.imn.htwk-leipzig.de/~waldmann/edu/ws21/pps/folien/#(235)), [weiterführende Literatur](https://www.imn.htwk-leipzig.de/~waldmann/edu/ws21/pps/folien/#(233))
Lösung:
```javascript
Solution
    { program = Program
                    { classes = [ class F extends C
                                , class C
                                , class D extends E
                                , class E extends C
                                ]
                    , methods = [ m ( E x, D y, C z)
                                , m ( F x, D y, D z)
                                , m ( D x, F y, F z)
                                , m ( E x, E y, E z)
                                , m ( C x, C y, E z)
                                ]
                    , call = m ( new E () , new D () , new D () ) 
                    }
    , minimal = [ 3, 0] 
    }
```
Vorgehensweise:

 1. Code kopieren und formatieren
 2. Hierarchiebaum zeichnen &rarr; meistens Verzweigung oder Reihenfolge
 4. So viele Funktionen wie möglich nicht passend (not applicable) gestalten
 5. Funktionendeklarationen und Aufrufe mit Blatt testen &rarr; minimale Funktionen ermitteln (siehe Hinweis)
 6. Anpassungen treffen und minimale Funktionen neu bestimmen

**Hinweis:**
- Zahl im Minimal-Array ist Index der Funktion im Array _methods_
- Minimale Methode ermitteln
	- P ist Menge der möglichen (applicable) Methoden
	- M ist die Menge der minimalen Methoden
	- Funktion ist minimal, wenn $`\lnot \exist p \in P: p < m`$
	- d.h. es existiert in P **keine** Funktion die kleiner ist als die zu prüfende Funktion
	- kleiner bedeutet hier, dass jeder Typ **kleiner oder gleich** (weiter unten im Hierarchiebaum) als der Typ der zu prüfende Methode ist.

**Beispiel für Minimal:**
- Hierarchiebaum: C &rarr; D &rarr; E &rarr; F
- Menge P: [ ( D,F,E ), (C, E, C) ]
	- Methode (D,F,E) minimal? &rarr; (C,E,C) < (D,F,E)? &rarr; **C > D**, **E > F**, **C > E** &rarr; (C,E,C) nicht kleiner &rarr; **minimal**
	- Methode (C,E,C) minimal? &rarr; (D, F, E) < (C, E, C)? &rarr;  D < C, F < E, E < C &rarr; (D,F,E) kleiner &rarr; **nicht minimal**
- Menge P: [ (D, E, F), (C, F, D) ]
	- Methode (D, E, F) minimal? &rarr;   (C, F, D) < (D, E, F)? &rarr;  **C > D** &rarr;  (C, F, D) nicht kleiner &rarr; **minimal**
	- Methode (C, F, D) minimal? &rarr; (D, E, F) < (C, F, D) ? &rarr; D < C, **E > F** &rarr;  (D, E, F) nicht kleiner  &rarr;  **minimal**

**Eigener/Schnellerer Lösungsweg:**
- Distanz berechnen via Hierarchiebaum
- Für jeden Schritt zum Eltern-Knoten **-1** berechnen
- Aufaddieren der Gesamtschritte für einen Parameter bis Zielknoten erreicht
- Aufaddieren der Gesamtschritte aller Parameter
- Funktion minimaler, wenn näher an Null
- **Überprüfung** mit der richtigen Methode oder Compiler (siehe Autotool-Tests)
- Beispiel
	-  Hierarchiebaum: C &rarr; D &rarr; E &rarr; F
	-  Methodendeklaration: 	m (D x, F y, C z)
	-  Aufruf m( new F(), new F(), new F() )
	-  Distanz für ersten Parameter &rarr; -1 + -1 &rarr; **-2**
	-  Distanz für zweiten Parameter &rarr; 0 &rarr; **0**
	-  Distanz für dritten Parameter &rarr; -1 + -1 + -1 &rarr; **-3**
	-  Gesamtdistanz &rarr; -2 + 0 + -3 &rarr; **-5**

## Aufgabe 55-1 (Polymorphie)
Vorlesung: [Skript](https://www.imn.htwk-leipzig.de/~waldmann/edu/ws21/pps/folien/#(245))

Lösung:
```javascript
S.<Animal>rowlf(S.<Animal>statler(S.<Piggy<Animal>>statler(S.<Animal>bunsen(S.waldorf(), S.chef()))), S.chef())
```
```javascript
S.<Animal>rowlf(
	S.<Animal>statler(
		S.<Piggy<Animal>>statler(
			S.<Animal>bunsen(
				S.waldorf(),
				S.chef()
			)
		)
	),
	S.chef()
)
```
Vorgehensweise:

 1. Code kopieren und formatieren
 2. Identifizieren der Methoden ohne Parameter &rarr; innerste Methoden
 3. Identifizieren der Methoden mit richtigem Rückgabetyp &rarr; äußerste Funktion
 4. Anfang von innen nach außen
	 5. Welcher Typ gibt die innerste Methode (Schritt 2) zurück
	 6. Wo kann dieser Rückgabetyp eingesetzt werden
	 7. Welche weiteren Parameter muss ich berücksichtigen

**Hinweis:** Wichtig sind die expliziten **Typangaben** bei Funktionen, die einen generischen Typ erwarten. Syntax: `ClassName.<Type>methodName`


## Theorie

### Compiler-Schritte
1. Frontend/Analysephase
    1. Lexikalische Analyse &rarr; Tokens
    2. Syntaktische Analyse &rarr; Syntaxbaum/AST
    3. Semantische Analyse &rarr; dekorierter/attributierter Syntaxbaum/AST
2. Backend/Synthesephase
    1. Zwischencodeerzeugung &rarr; Zwischencode/Austauschformat (maschinennahe)
    2. Codeoptimierung &rarr; Programmoptimierungne auf Zwischencode/Maschinencode
    3. Codegenerierung &rarr; Maschinencode/Code in Zielsprache

### Hoare-Kalkül

#### Axiom fuer Zuweisung

`{ N[x/E] } x := E { N }`

N[x/E] ist der Ausdruck N, wobei jedes Vorkommen des Namens x durch den Ausdruck E ersetzt wird

Beispiel:

```
{ ... } y := x+3 { y >= 7}
(y>=7)[y/x+3] = (x+3 >= 7) = (x >= 4)
```

#### Axiom fuer die Simultanzuweisung

`{ N[v1/e1,v2/e2] } (v1, v2) := (e1, e2) { N }`

Ähnlich wie bei [Axiom für Zuweisung](#axiom-fuer-die-simultanzuweisung) nur simultanes Ersetzen der beiden Namen

Beispiel:
```
{ ... } (a,b) := (b,a) { a=2 und b=5}
{a=2 und b=5}[a/b, b/a] = {b=2 und a=5}

{ ... } (x,y) := (x+y, y-x) {x=7 und y>=3}
{x=7 und y>=3}[x/x+y,y/y-x] = {x+y=7 und y-x=>3}
```

#### Axiom fuer logische Umformungen

`wenn {V} A {N} und V' => V und N => N' dann {V'} A {N'}`

* Verschärfen einer Vorbedingungen (von V zu V')
* Abschwächen einer Nachbedingungen (von N zu N')

#### Axiom fuer Verzweigung

`wenn { V und B } C { N } und { V und not B } D { N } dann { V } if (B) then C else D { N }`

#### Axiom fuer Schleifen

`wenn { I and B } A { I }, dann { I } while (B) do A { I and not B }`

Arbeiten mit Invariante