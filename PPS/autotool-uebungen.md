# Übungen

## Polymorphie
### 1. Übung (autotool)
```
Gesucht ist ein Ausdruck vom Typ Fozzie<Animal, Animal>
in der Signatur
    class S {
        static <T2> Piggy<T2> statler ( Piggy<Piggy<T2>> x);
        static Piggy<Piggy<Kermit>> waldorf ( );
        static <T1> Piggy<Piggy<Piggy<Animal>>> bunsen (
            Piggy<Piggy<Kermit>> x,
            T1 y
        );
        static Animal chef ( );
        static <T1> Fozzie<T1, T1> rowlf (
            Piggy<T1> x,
            T1 y
        );
    }
```

<details>
    <summary>Lösung</summary>
    <xmp>
    S.<Animal>rowlf(S.<Animal>statler(S.<Piggy<Animal>>statler(S.<Animal>bunsen(S.waldorf(), S.chef()))), S.chef())
    </xmp>
</details>

<br>

### 2. Übung (ausgedacht)

```
Gesucht ist ein Ausdruck vom Typ Piggy<Fozzie<Animal>, Animal>
in der Signatur
    class S {
        static <T1> Fozzie<T1> waldorf (T1 x);
        static <T1, T2> Piggy<T2, T1> chef(
            Fozzie<Fozzie<T1>> x,
            <Piggy<Piggy<T1>>>
        );
        static  Animal statler();
        static Piggy<Piggy<Kermit>> bunsen();
        static <T1> Piggy<Piggy<Animal>> pops( Piggy<T1> x)
    }
```

<details>
    <summary>Lösung</summary>
    <xmp>
    S.<Animal, Fozzie<Animal>> chef(
        S.<Fozzie<Animal>> waldorf (
            S.<Animal> waldorf( S.statler())
        ),
        S.<Piggy<Kermit>> pops (S.bunsen())
    )
    </xmp>
</details>

<br>

### 3. Übung (ausgedacht)

```
Gesucht ist ein Ausdruck vom Typ Kermit<Piggy<Animal>, Fozzie<Animal>>
in der Signatur
    class S {
        static Kermit statler();
        static <T1> Piggy<T1> bunsen( T1 x );
        static <T2> Kermit<T2, Fozzie<Animal>> waldorf (
            Piggy<T2> x,
            Fozzie<Piggy<T2>> y
        )
        static <T3> Fozzie <T3> pops (T3 x);
        static Piggy<Animal> rowl (Kermit y);
    }
```
<details>
    <summary>Lösung</summary>
    <xmp>
    S.<Piggy<Animal>>waldorf (
        S.<Piggy<Animal>>bunsen (
            S.rowl(S.statler())
        ),
        S.<Piggy<Piggy<Animal>>>pops(
            S.<Piggy<Animal>>bunsen (
                S.rowl(S.Statler())
            )
        )
    )
    </xmp>
</details>

<br>

## Überladung

### Übung 1 (autotool)

```
Fill in all holes (_) in the following program
  Program
      { classes = [ class F extends _
                  , class C
                  , class D extends E
                  , class E extends _
                  ]
      , methods = [ m ( _ x, D y, C z)
                  , m ( F x, D y, D z)
                  , m ( D x, F y, F z)
                  , m ( _ x, _ y, _ z)
                  , m ( C x, C y, E z)
                  ]
      , call = m ( new E () , new _ () , new _ () ) 
      }
such that the set of indices of minimal (most specific)
applicable method declarations (cf. JLS 15.12.2) is
  [ 3, _]
```

<details>
    <summary>Lösung</summary>
    <pre>
        Solution
    { program = Program
                    { classes = [ class F extends D
                                , class C
                                , class D extends E
                                , class E extends C
                                ]
                    , methods = [ m ( F x, D y, C z)
                                , m ( F x, D y, D z)
                                , m ( D x, F y, F z)
                                , m ( E x, E y, C z)
                                , m ( C x, C y, E z)
                                ]
                    , call = m ( new E () , new E () , new E () ) 
                    }
    , minimal = [ 3, 4] 
    }
    </pre>
</details>

<br>

### Übung 2 (ausgedacht)

```
Fill in all holes (_) in the following program
  Program
      { classes = [ class F extends D
                  , class C
                  , class D extends _
                  , class E extends _
                  ]
      , methods = [ m ( E x, _ y, C z)
                  , m ( F x, D y, C z)
                  , m ( _ x, _ y, E z)
                  , m ( _ x, C y, F z)
                  , m ( E x, F y, _ z)
                  ]
      , call = m ( new _ () , new _ () , new D () ) 
      }
such that the set of indices of minimal (most specific)
applicable method declarations (cf. JLS 15.12.2) is
  [ 2, _]
```

<details>
    <summary>Lösung</summary>
    <pre>
        Solution
    { program = Program
                    { classes = [ class F extends D
                                , class C
                                , class D extends E
                                , class E extends C
                                ]
                    , methods = [ m ( F x, D y, C z)
                                , m ( F x, D y, D z)
                                , m ( D x, F y, F z)
                                , m ( E x, E y, C z)
                                , m ( C x, C y, E z)
                                ]
                    , call = m ( new E () , new E () , new E () ) 
                    }
    , minimal = [ 3, 4] 
    }
    </pre>
</details>

<br>

### Übung 3 (ausgedacht)

```
Fill in all holes (_) in the following program
  Program
      { classes = [ class F extends _
                  , class C extends D
                  , class E
                  , class D extends _
                  ]
      , methods = [ m ( E x, F y, _ z)
                  , m ( C x, _ y, D z)
                  , m ( D x, C y, F z)
                  , m ( _ x, E y, _ z)
                  , m ( F x, E y, _ z)
                  , m ( C x, C y, D z)
                  ]
      , call = m ( new _ () , new _ () , new C () ) 
      }
such that the set of indices of minimal (most specific)
applicable method declarations (cf. JLS 15.12.2) is
  [ 4, _]
```

<details>
    <summary>Lösung</summary>
    <pre>
        Solution
    { program = Program
                    { classes = [ class F extends C
                                , class C extends D
                                , class E
                                , class D extends E
                                ]
                    , methods = [ m ( E x, F y, F z)
                                , m ( C x, F y, D z)
                                , m ( D x, C y, F z)
                                , m ( C x, E y, C z)
                                , m ( F x, E y, E z)
                                , m ( C x, C y, D z)
                                ]
                    , call = m ( new F () , new C () , new C () ) 
                    }
    , minimal = [ 4, 3] 
    }
    </pre>
</details>

<br>

### Übung 4 (ausgedacht)

```
Fill in all holes (_) in the following program
  Program
      { classes = [ class C extends _
                  , class D
                  , class E extends _
                  , class F extends _
                  ]
      , methods = [ m ( _ x, _ y, E z)
                  , m ( C x, _ y, D z)
                  , m ( _ x, _ y, F z)
                  , m ( _ x, E y, _ z)
                  , m ( F x, E y, C z)
                  , m ( C x, F y, E z)
                  ]
      , call = m ( new F () , new C () , new _ () ) 
      }
such that the set of indices of minimal (most specific)
applicable method declarations (cf. JLS 15.12.2) is
  [ 2, _]
```

<details>
    <summary>Lösung</summary>
    <pre>
        Solution
    { program = Program
                    { classes = [ class C extends E
                                , class D
                                , class E extends F
                                , class F extends D
                                ]
                    , methods = [ m ( D x, D y, E z)
                                , m ( C x, C y, D z)
                                , m ( F x, F y, F z)
                                , m ( D x, E y, F z)
                                , m ( F x, E y, C z)
                                , m ( C x, F y, E z)
                                ]
                    , call = m ( new F () , new C () , new F () ) 
                    }
    , minimal = [ 2, 3] 
    }
    </pre>
</details>

<br>

## Frames

### Aufgabe 1 (autotool)

```
Ersetzen Sie im Programm
    { missing ;
    missing ;
    missing ;
    }
jedes 'missing' durch eine Deklaration oder einen Ausdruck,
so daß nach höchstens 40 Auswertungsschritten
die Anweisung 'halt' erreicht wird
und die Frames dann folgende Verweise enthalten:
    Frame 1 : dynamischer Vorgänger 0 , statischer Vorgänger 0 ;
    Frame 2 : dynamischer Vorgänger 1 , statischer Vorgänger 1 ;
    Frame 3 : dynamischer Vorgänger 2 , statischer Vorgänger 1 ;
    Frame 4 : dynamischer Vorgänger 3 , statischer Vorgänger 3 ;
```

<details>
    <summary>Lösung</summary>
    <pre>
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
    </pre>
</details>

<br>

### Aufgabe 2 (autotool)

```
Ersetzen Sie im Programm
    { missing ;
    missing ;
    missing ;
    }
jedes 'missing' durch eine Deklaration oder einen Ausdruck,
so daß nach höchstens 40 Auswertungsschritten
die Anweisung 'halt' erreicht wird
und die Frames dann folgende Verweise enthalten:
    Frame 1 : dynamischer Vorgänger 0 , statischer Vorgänger 0 ;
    Frame 2 : dynamischer Vorgänger 1 , statischer Vorgänger 1 ;
    Frame 3 : dynamischer Vorgänger 1 , statischer Vorgänger 1 ;
    Frame 4 : dynamischer Vorgänger 3 , statischer Vorgänger 2 ;
    Frame 5 : dynamischer Vorgänger 1 , statischer Vorgänger 4 ;
```

<details>
    <summary>Lösung</summary>
    <pre>
{
    f2 = function() {
        f4 = function() {
            f5 = function() {
                halt;
            };
        f5;
        };
        f4;
    };
    f3 = function(help) {
        zwischen = help();
        zwischen;
    };
    f3(f2())();
}
    </pre>
</details>

<br>

### Übung 3 (ausgedacht)

```
Ersetzen Sie im Programm
    { missing ;
    missing ;
    missing ;
    }
jedes 'missing' durch eine Deklaration oder einen Ausdruck,
so daß nach höchstens 40 Auswertungsschritten
die Anweisung 'halt' erreicht wird
und die Frames dann folgende Verweise enthalten:
    Frame 1 : dynamischer Vorgänger 0 , statischer Vorgänger 0 ;
    Frame 2 : dynamischer Vorgänger 1 , statischer Vorgänger 1 ;
    Frame 3 : dynamischer Vorgänger 1 , statischer Vorgänger 2 ;
    Frame 4 : dynamischer Vorgänger 3 , statischer Vorgänger 1 ;
```

<details>
    <summary>Lösung</summary>
    <pre>
{
    f2 = function () {
        f3 = function(help) {
            help();
        };
        f3;
    };
    f4 = function() {
        halt;
    };
    f2()(f4);
}
    </pre>
</details>

<br>

### Übung 4 (ausgedacht)

```
Ersetzen Sie im Programm
    { missing ;
    missing ;
    missing ;
    }
jedes 'missing' durch eine Deklaration oder einen Ausdruck,
so daß nach höchstens 40 Auswertungsschritten
die Anweisung 'halt' erreicht wird
und die Frames dann folgende Verweise enthalten:
    Frame 1 : dynamischer Vorgänger 0 , statischer Vorgänger 0 ;
    Frame 2 : dynamischer Vorgänger 1 , statischer Vorgänger 1 ;
    Frame 3 : dynamischer Vorgänger 1 , statischer Vorgänger 1 ;
    Frame 4 : dynamischer Vorgänger 3 , statischer Vorgänger 2 ;
    Frame 5 : dynamischer Vorgänger 4 , statischer Vorgänger 3 ;
```

<details>
    <summary>Lösung</summary>
    <pre>
{
    f2 = function() {
        f4 = function(help) {
            help();
        };
        f4;
    };
    f3 = function(help) {
        f5 = function() {
            halt;
        };
        help(f5);
    };
    f3(f2());
}
    </pre>
</details>

<br>

### Übung 5 (ausgedacht)
Lösung dürfte stimmen, unsicher wegen Sichtbarkeiten in höheren Blöcken.
```
Ersetzen Sie im Programm
    { missing ;
    missing ;
    missing ;
    }
jedes 'missing' durch eine Deklaration oder einen Ausdruck,
so daß nach höchstens 40 Auswertungsschritten
die Anweisung 'halt' erreicht wird
und die Frames dann folgende Verweise enthalten:
    Frame 1 : dynamischer Vorgänger 0 , statischer Vorgänger 0 ;
    Frame 2 : dynamischer Vorgänger 1 , statischer Vorgänger 1 ;
    Frame 3 : dynamischer Vorgänger 2 , statischer Vorgänger 2 ;
    Frame 4 : dynamischer Vorgänger 1 , statischer Vorgänger 2 ;
    Frame 5 : dynamischer Vorgänger 4 , statischer Vorgänger 1 ;
    Frame 6 : dynamischer Vorgänger 5 , statischer Vorgänger 4 ;
```

<details>
    <summary>Lösung</summary>
    <pre>
{
    f5 = function(help) {
        help();
    };
    f2 = function() {
        f4 = function() {
            f6 = function() {
                halt;
            };
            f5(f6);
        };
        f3 = function(help) {
            help;
        };
        f3(f4);
    };
    f2()();
}
    </pre>
</details>

<br>

