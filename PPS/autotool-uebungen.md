# Aufgabeen

<!-- toc -->

- [Polymorphie](#polymorphie)
  * [1. Aufgabe (autotool)](#1-aufgabe-autotool)
  * [2. Aufgabe (ausgedacht)](#2-aufgabe-ausgedacht)
  * [3. Aufgabe (ausgedacht)](#3-aufgabe-ausgedacht)
  * [Aufgabe 4 (autotool Bianca)](#aufgabe-4-autotool-bianca)
    + [Aufgabe 5 (autotool Bianca)](#aufgabe-5-autotool-bianca)
  * [Aufgabe 6 (autotool Maja)](#aufgabe-6-autotool-maja)
  * [Aufgabe 7 (autotool unbekannt)](#aufgabe-7-autotool-unbekannt)
- [Überladung](#uberladung)
  * [Aufgabe 1 (autotool)](#aufgabe-1-autotool)
  * [Aufgabe 2 (ausgedacht)](#aufgabe-2-ausgedacht)
  * [Aufgabe 3 (ausgedacht)](#aufgabe-3-ausgedacht)
  * [Aufgabe 4 (ausgedacht)](#aufgabe-4-ausgedacht)
  * [Aufgabe 5 (Altklausur)](#aufgabe-5-altklausur)
  * [Aufgabe 6 (autotool Bianca)](#aufgabe-6-autotool-bianca)
- [Frames](#frames)
  * [Aufgabe 1 (autotool)](#aufgabe-1-autotool-1)
  * [Aufgabe 2 (autotool)](#aufgabe-2-autotool)
  * [Aufgabe 3 (ausgedacht)](#aufgabe-3-ausgedacht-1)
  * [Aufgabe 4 (ausgedacht)](#aufgabe-4-ausgedacht-1)
  * [Aufgabe 5 (ausgedacht)](#aufgabe-5-ausgedacht)
- [While -> Goto](#while---goto)
  * [Aufgabe 1 (autotool)](#aufgabe-1-autotool-2)
  * [Aufgabe 2 (ausgedacht)](#aufgabe-2-ausgedacht-1)
  * [Aufgabe 3 (ausgedacht)](#aufgabe-3-ausgedacht-2)
  * [Aufgabe 3 (ausgedacht)](#aufgabe-3-ausgedacht-3)
- [Goto -> While](#goto---while)
  * [Aufgabe 1 (autotool)](#aufgabe-1-autotool-3)
  * [Aufgabe 2 (ausgedacht)](#aufgabe-2-ausgedacht-2)
  * [Aufgabe 3 (ausgedacht)](#aufgabe-3-ausgedacht-4)

<!-- tocstop -->

## Polymorphie
### 1. Aufgabe (autotool)
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
    <pre>
    S.&lt;Animal&gt;rowlf(S.&lt;Animal&gt;statler(S.&lt;Piggy&lt;Animal&gt;&gt;statler(S.&lt;Animal&gt;bunsen(S.waldorf(), S.chef()))), S.chef())
    </pre>
</details>

<br>

### 2. Aufgabe (ausgedacht)

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
    <pre>
    S.&lt;Animal, Fozzie&lt;Animal&gt;&gt; chef(
        S.&lt;Fozzie&lt;Animal&gt;&gt; waldorf (
            S.&lt;Animal&gt; waldorf( S.statler())
        ),
        S.&lt;Piggy&lt;Kermit&gt;&gt; pops (S.bunsen())
    )
    </pre>
</details>

<br>

### 3. Aufgabe (ausgedacht)

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
    <pre>
    S.&lt;Piggy&lt;Animal&gt;&gt;waldorf (
        S.&lt;Piggy&lt;Animal&gt;&gt;bunsen (
            S.rowl(S.statler())
        ),
        S.&lt;Piggy&lt;Piggy&lt;Animal&gt;&gt;&gt;pops(
            S.&lt;Piggy&lt;Animal&gt;&gt;bunsen (
                S.rowl(S.Statler())
            )
        )
    )
    </pre>
</details>

<br>

### Aufgabe 4 (autotool Bianca)

```
Gesucht ist ein Ausdruck vom Typ Animal
in der Signatur
    class S {
        static <T2> Piggy<Fozzie<Kermit, Animal>> statler (
            Piggy <T2> x,
            Piggy <T2> y
        );
        static <T2> Piggy<Kermit> waldorf (
            T2 x,
            Piggy<T2> y
        );
        static Piggy<Animal> bunsen();
        static <T1> Animal chef (
            Piggy<Kermit> x,
            T1 y
        );
        static <T2> Fozzie<Kermit, Animal> rowl (Piggy<T2> x);
    }
```
<details>
    <summary>Lösung</summary>
    <pre>
S.&lt;Piggy&lt;Animal&gt;chef(
    S.&lt;Fozzie&lt;Kermit, Animal&gt;&gt;waldorf(
        S.&lt;Animal&gt;rowlf(S.bunsen()),
        S.&lt;Animal&gt;statler(
            S.bunsen(),
            S.bunsen()
        )
    ),
    S.bunsen()
)
    </pre>
</details>

<br>

#### Aufgabe 5 (autotool Bianca)

```
Gesucht ist ein Ausdruck vom Typ Fozzie<Piggy<Animal>, Kermit>
in der Signatur
    class S {
        static Piggy<Animal> statler (Animal x);
        static <T1> Piggy<T1> waldorf (
            Fozie<T1, Animal> x,
            Piggy<Animal> y
        );
        static Animal bunsen();
        static <T2> Fozzie<Piggy<Animal>, Kermit> chef (
            Piggy<T2> x,
            Piggy<Kermit> y
        );
        static Fozzie<Kermit, Animal> rowlf ();
    }
```
<details>
    <summary>Lösung</summary>
    <pre>
S.&lt;Animal&gt;chef(
    S.statler(S.bunsen()),
    S.&lt;Kermit&gt;waldorf(
        S.rowlf(),
        S.statler(S.bunsen())
    )
)
    </pre>
</details>

<br>

### Aufgabe 6 (autotool Maja)

```
Gesucht ist ein Ausdruck vom Typ <Fozzie<Piggy<Piggy<Piggy<Piggy<Piggy<Animal>>>>>>, Animal>
in der Signatur
    class S {
        static <T1> Piggy<Animal> statler (Piggy<T1> x);
        static <T2> Fozzie<T2, Animal> waldorf (T2 x);
        static Fozzie<Kermit, Kermit> bunsen();
        static <T2, T1> Piggy<Kermit> chef (Fozzie<T2, T1> x);
        static <T1> <Piggy<Piggy<Piggy<T1>>>> rowlf (Piggy<T1> x);
    }
```
<details>
    <summary>Lösung</summary>
    <pre>
S.&lt;Piggy&lt;Piggy&lt;Piggy&lt;Piggy&lt;Piggy&lt;Animal&gt;&gt;&gt;&gt;&gt;&gt;waldorf(
    S.&lt;&lt;Piggy&lt;Piggy&lt;Animal&gt;rowlf(
        S.&lt;Animal&gt;rowlf(
            S.&lt;Kermit&gt;statler(S.&lt;Kermit, Kermit&gt;chef(S.bunsen()))
        )
    )
)
    </pre>
</details>

<br>

### Aufgabe 7 (autotool unbekannt)

```
Gesucht ist ein Ausdruck vom Typ Piggy<Fozzie<Piggy<Animal>, Kermit>>
in der Signatur
    class S {
        static Kermit statler (
            Piggy<Fozzie<Animal, Animal>> x,
            Piggy<Piggy<Kermit>> y
        );
        static <T2> Piggy<Animal> waldorf (
            Piggy<Piggy<T2>> x,
            T2 y
        );
        static Piggy<Piggy<Kermit>> bunsen();
        static Piggy<Fozzie<Animal, Animal>> chef();
        static <T1> Piggy<Fozzie<T1, Kermit>> rowlf (T1 x);
    }
```
<details>
    <summary>Lösung</summary>
    <pre>
S.&lt;Piggy&lt;Animal&gt;&gt;rowlf(
    S.&lt;Kermit&gt;waldorf(
        S.bunsen(),
        S.statler(
            S.chef(),
            S.bunsen()
        )
    )
)
    </pre>
</details>

<br>

## Überladung

### Aufgabe 1 (autotool)

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

### Aufgabe 2 (ausgedacht)

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

### Aufgabe 3 (ausgedacht)

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

### Aufgabe 4 (ausgedacht)

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

### Aufgabe 5 (Altklausur)

```
Fill in all holes (_) in the following program
  Program
      { classes = [ class D extends _
                  , class E
                  , class C extends D
                  , class F extends D
                  ]
      , methods = [ m ( _ x, E y, D z)
                  , m ( E x, E y, C z)
                  , m ( F x, E y, D z)
                  ]
      , call = m ( new _ () , new _ () , new C () ) 
      }
such that the set of indices of minimal (most specific)
applicable method declarations (cf. JLS 15.12.2) is
  [ 1, _]
```

<details>
    <summary>Lösung</summary>
    <pre>
        Solution
    { program = Program
                    { classes = [ class D extends E
                                , class E
                                , class C extends D
                                , class F extends D
                                ]
                    , methods = [ m ( C x, E y, D z)
                                , m ( E x, E y, C z)
                                , m ( F x, E y, D z)
                                ]
                    , call = m ( new C () , new E () , new C () ) 
                    }
    , minimal = [ 1, 0] 
    }
    </pre>
</details>

<br>

### Aufgabe 6 (autotool Bianca)

```
Fill in all holes (_) in the following program
  Program
      { classes = [ class D extends E
                  , class C extends E
                  , class E
                  , class F extends _
                  ]
      , methods = [ m ( E x, F y, C z)
                  , m ( D x, C y, _ z)
                  , m ( _ x, F y, F z)
                  ]
      , call = m ( new _ () , new _ () , new C () ) 
      }
such that the set of indices of minimal (most specific)
applicable method declarations (cf. JLS 15.12.2) is
  [ 0, _]
```

<details>
    <summary>Lösung</summary>
    <pre>
        Solution
    { program = Program
                    { classes = [ class D extends E
                                , class C extends E
                                , class E
                                , class F extends _
                                ]
                    , methods = [ m ( E x, F y, C z)
                                , m ( D x, C y, E z)
                                , m ( E x, F y, F z)
                                ]
                    , call = m ( new D () , new F () , new C () ) 
                    }
    , minimal = [ 0, 1] 
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

### Aufgabe 3 (ausgedacht)

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

### Aufgabe 4 (ausgedacht)

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

### Aufgabe 5 (ausgedacht)
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

## While -> Goto

### Aufgabe 1 (autotool)

```
Gesucht ist ein Programm,
das äquivalent ist zu
    {foo : while (a)
               {bar : while (b)
                          {p;
                          if (c)
                              break bar;
                          q;
                          if (c)
                              continue foo;
                          r;}}}
und diese Bedingungen erfüllt
    And [ Flat, No_Loops]
```

<details>
    <summary>Lösung</summary>
    <pre>
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
    </pre>
</details>

<br>

### Aufgabe 2 (ausgedacht)

```
Gesucht ist ein Programm,
das äquivalent ist zu
    {
        foo: while (a) {
            q;
            if (c) {
                bar: while (b) {
                    p;
                    if (c)
                        continue foo;
                    baz: while (d) {
                        r;
                    }
                    if (c)
                        break bar;
                    s;
                }
            }
        }
    }
und diese Bedingungen erfüllt
    And [ Flat, No_Loops]
```
<details>
    <summary>Lösung</summary>
    <pre>
{
foo:
    if (!a)
        goto end;
    q;
    if (c) 
        goto bar;
    goto foo;

bar:
    if (!b)
        goto foo;
    p;
    if (c)
        goto foo;
    goto baz;

barSecond:
    if (c)
        goto foo;
    s;
    goto bar;
    
baz:
    if (!d)
        goto barSecond;
    r;
    goto baz;

end : skip;
}
    </pre>
</details>

<br>

### Aufgabe 3 (ausgedacht)

```
Gesucht ist ein Programm,
das äquivalent ist zu
    {
        foo: while (a) {
            if (c)
                q;
            r;
            bar: while (b) {
                s;
                if (d)
                    continue bar;
                if (e)
                    break foo;
            }
            q;
        }
        baz: while (f) {
            q;
            r;
            if (c)
                break baz;
            s;
        }
    }
und diese Bedingungen erfüllt
    And [ Flat, No_Loops]
```
<details>
    <summary>Lösung</summary>
    <pre>
{
foo:
    if (!a)
        goto baz;
    goto fooInnerFirst;

fooInnerFirst:
    if (c)
        q;
    r;
    goto bar;

bar:
    if (!b)
        goto fooInnerSecond;
    s;
    if (d)
        goto bar;
    if (e)
        got baz;
    goto bar;

fooInnerSecond:
    q;
    goto foo;

baz:
    if (!f)
        goto end;
    q;
    r;
    if (c)
        goto end;
    s;
    goto baz;

end: skip;
}
    </pre>
</details>

<br>


### Aufgabe 3 (ausgedacht)

```
Gesucht ist ein Programm,
das äquivalent ist zu
    {
        foo: while (a) {
            bar: while (b) {
                q;
                baz: while (d) {
                    r;
                    if (c)
                        break bar;
                    if (e)
                        continue foo;
                    s;
                    if (c)
                        continue baz;
                    q;
                    if (c) {
                        qux: while  (f) {
                            q;
                            if (e)
                                break foo;
                        }
                    }
                }
            }
        }
    }
und diese Bedingungen erfüllt
    And [ Flat, No_Loops]
```
<details>
    <summary>Lösung</summary>
    <pre>
{
foo:
    if (!a)
        goto end;
    goto bar;

bar:
    if (!b)
        goto foo;
    q;
    goto baz;

baz:
    if (!d)
        goto bar;
    r;
    if (c)
        goto foo;
    if (e)
        goto foo;
    s;
    if (c)
        goto baz;
    q;
    if (c)
        goto qux;
    goto baz;

qux:
    if (!f)
        goto baz;
    q;
    if (e)
        goto end;
    goto qux;

end: skip;
}
    </pre>
</details>

<br>

## Goto -> While

### Aufgabe 1 (autotool)

```
Gesucht ist ein Programm,
das äquivalent ist zu
    {start : if (! b)
                 goto end;
    p;
    if (! c)
        goto later;
    goto start;
    later : q;
    if (! a)
        goto start;
    end : skip;}
und diese Bedingungen erfüllt
    And [ No_Labels
        , No_Gotos
        , Simple_Loops
        ]
```

<details>
    <summary>Lösung</summary>
    <pre>
{
    i := true;
    while (b && i) {
        p;
        if (!c) {
            q;
            if (a) {
                i := false;
            }
        }
    }
}
    </pre>
</details>

<br>

### Aufgabe 2 (ausgedacht)

```
Gesucht ist ein Programm,
das äquivalent ist zu
    {
        foo:
            if (!a)
                goto end;
            goto bar;

        bar:
            if (!b)
                goto foo;
            q;
            if (c)
                goto baz;
            r;
            goto bar;

        baz:
            q;
            if (c)
                goto end;
            goto foo;

        end: skip;
    }
und diese Bedingungen erfüllt
    And [ No_Labels
        , No_Gotos
        , Simple_Loops
        ]
```

<details>
    <summary>Lösung</summary>
    <pre>
{
    i := true;
    h := true;
    while (a) {
        i := true
        while (b && i) {
            q;
            if (c) {
                i := false;
            }
            if (!c) {
                r;
            }
        }
        q;
        if (c) {
            h := false;
        }
    }
}
    </pre>
</details>

<br>

### Aufgabe 3 (ausgedacht)

```
Gesucht ist ein Programm,
das äquivalent ist zu
    {
        foo:
            if (!a)
                goto baz;
            r;
            if (c)
                goto bar;
            goto foo;

        bar:
            q;
            if (c)
                goto baz;
            r;
            if (c)
                goto end;
            goto foo;

        baz:
            if (!d)
                goto end;
            r;
            if (c)
                goto end;
            q;
            goto baz;
        
        end: skip;
    }
und diese Bedingungen erfüllt
    And [ No_Labels
        , No_Gotos
        , Simple_Loops
        ]
```

<details>
    <summary>Lösung</summary>
    <pre>
{
    i := true;
    h := false;
    j := false;
    while (a && i && h) {
        r;
        if (c) {
            q;
            if (c) {
                i := false;
            }
            if (!c) {
                r;
                if (c) {
                    h := false;
                }
            }
        }
    }
    while (d && h && j) {
        r;
        if (c) {
            j := false;
        }
        if (!c) {
            q;
        }
    }

}
    </pre>
</details>

<br>