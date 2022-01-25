# Testdateien und Testfälle für Online-Compiler

## Frames


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
