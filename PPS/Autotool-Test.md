# Testdateien und Testfälle für Online-Compiler

## Reguläre Ausdrücke (Regexp)

Tools: [Regex101d](https://regex101.com/)

**Hinweise:**
- Syntax ist etwas verschieden
    - Hülle: ^* &rarr; *
    - Gruppe: () &rarr; (?:) &rarr; non-capturing group

**Ergebnisse:**
- alle Wörter mit gerade vielen a und beliebig vielen b?
    - `(b^*(ab^*b)^*b^*)^*` &rarr; autotool
    -  `(?:b*(?:ab*a)*b*)*` &rarr; regex101

## Kontextfreie Grammatiken

Tools: [Tool](https://web.stanford.edu/class/archive/cs/cs103/cs103.1156/tools/cfg/)

## Frames

Visualisierungstools: [Tool1](https://pythontutor.com/visualize.html#mode=display), [Tool2](http://latentflip.com/loupe)


## Nebenwirkungen
Benutze das JS-Programm _sideeffects.js_ und passe die Eingabeparameter entsprechend an.

Source-Code: [Code](https://stackblitz.com/edit/node-t5f4ok)

**Achtung:**
- Funktioniert nur mit _Node-Version: 16.13.9_
- Funkitoniert nur lokal
- Bei mehreren Ausgaben darauf achten, dass das resultierende Array keine NaN´s oder objekte enthält!

## Überladung
Online-Compiler: [Java-Compiler](https://www.mycompiler.io/new/java)
Testdatei:
```java
import java.util.*;
import java.lang.*;
import java.io.*;

// The main method must be in a class named "Main".
class Main {
    public static void main(String[] args) {
        Test.test(new _(), new _(), new _());
    }
}

class C {}
class D extends _ {}
class E extends _ {}
class F extends _ {}

class Test {
    static void test(_ x, _ y, _ z ) {}
    static void test(_ x, _ y, _ z ) {}
    static void test(_ x, _ y, _ z ) {}
    static void test(_ x, _ y, _ z ) {}
    static void test(_ x, _ y, _ z ) {}
}
```
