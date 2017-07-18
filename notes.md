## Quick links

* [The Ceptre repo](https://github.com/chrisamaphone/interactive-lp)
* [Programming Interactive Worlds with Linear Logic](https://www.cs.cmu.edu/~cmartens/thesis/) (aka "the Ceptre thesis")

## Program structure

A program is (mostly) a series of declarations. A declaration can be:

* A type declaration.
* A forward-chaining predicate declaration.
* A backward-chaining predicate declaration.
* A stage declaration.
* A fact declaration.

### Types

Type declarations look like:

```clj
{:name nat
 :terms [[z] [s nat]]}

{:name character
 :terms [hamlet ophelia polonius]}
```

At some point I might add an additional layer of sugar, so you can just do:

```clj
[nat [z] [s nat]]

[character hamlet ophelia polonius]
```

Adding more sugar is kind of hard to justify though – ideally the web frontend will mostly supersede the Clojure/EDN backend syntax.

### Forward-chaining predicates

Forward-chaining predicate (aka "pred", "resource") declarations look like:

```clj
[at character location]

[health nat]

main-screen
```

TODO: There are some useful invariants on these that I suspect we could find ways to automatically enforce within the authoring interface. Consider:

* Exclusivity: A character can only be `at` one location at a time. We can be on *either* the `main-screen` or the `pause-screen`, but never both at once.
* Symmetry: If `[married romeo juliet]`, then necessarily `[married juliet romeo]` as well.

The Ceptre thesis touches briefly on these properties in section 5.6.1.

### Backward-chaining predicates

Backward-chaining predicate (aka "bwd", "function"?) declarations look like:

```clj
{:sig [subtract nat nat nat-option]
 :cases [{:pattern [subtract N z [some N]]}
         {:pattern [subtract z [s N] none]}
         {:pattern [subtract [s N] [s M] [some P]]
          :goals   [[subtract N M [some P]]]}
         {:pattern [subtract [s N] [s M] none]
          :goals   [[subtract N M none]]}]}

{:sig [damage-of weapon nat]
 :cases [[damage-of sword 4]
         [damage-of mace 5]
         [damage-of grenade 10]]}

{:sig [plus nat nat nat]
 :cases [[plus z N N]
         {:pattern [plus [s N] M [s Sum]]
          :goals   [[plus N M Sum]]}]}
```

### Stages

Stage declarations look like:

```clj
{:name act
 :selection :interactive ; can also be :ordered or :random
 :rules […rules…]
 :quiescence-rules […quiescence rules…]}
```

Rules look like:

```clj
{:name fight-hit
 :consume [[try-fight] [monster-hp MHP]]
 :check   [[fight-in-progress] [weapon-damage D] [subtract MHP D [some MHP']]]
 :results [[monster-hp MHP']]}
```

Ceptre collapses a rule's `:consume` and `:check` premises into a single list, and uses the `$` sigil as a prefix on predicate names to indicate when a matched fact should be kept rather than consumed. We drop the `$` syntax entirely and instead separate out the `:consume` and `:check` premises into two distinct lists.

Quiescence rules look like:

```clj
{:consume []
 :check   [[fight-in-progress]]
 :results []
 :goto fight-auto}
```

In Ceptre proper, quiescence rules live at the top level of the program rather than belonging to any particular stage. In practice, though – because a quiescence rule must always consume one stage resource and produce a different stage resource – I'm pretty sure the semantics are equivalent.

### Facts

Fact (aka "resource instance") declarations look like:

```clj
[at hamlet elsinore]

main-screen
```

But because multiple "identical" facts can coexist, we have to assign every one of these a unique ID so we can tell them apart. So basically we "compile" facts to look like this:

```clj
{:id 42
 :expr [at hamlet elsinore]
 …maybe causality info, etc…}
```
