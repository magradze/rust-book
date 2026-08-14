// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="title-page.html">პროგრამირების ენა Rust</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="foreword.html">წინასიტყვაობა</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch00-00-introduction.html">შესავალი</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch01-00-getting-started.html"><strong aria-hidden="true">1.</strong> დაწყება</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch01-01-installation.html"><strong aria-hidden="true">1.1.</strong> ინსტალაცია</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch01-02-hello-world.html"><strong aria-hidden="true">1.2.</strong> Hello, World!</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch01-03-hello-cargo.html"><strong aria-hidden="true">1.3.</strong> Hello, Cargo!</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch02-00-guessing-game-tutorial.html"><strong aria-hidden="true">2.</strong> რიცხვის გამოცნობის თამაში</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch03-00-common-programming-concepts.html"><strong aria-hidden="true">3.</strong> პროგრამირების ძირითადი კონცეფციები</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch03-01-variables-and-mutability.html"><strong aria-hidden="true">3.1.</strong> ცვლადები და Mutability</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch03-02-data-types.html"><strong aria-hidden="true">3.2.</strong> მონაცემთა ტიპები</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch03-03-how-functions-work.html"><strong aria-hidden="true">3.3.</strong> ფუნქციები</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch03-04-comments.html"><strong aria-hidden="true">3.4.</strong> კომენტარები</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch03-05-control-flow.html"><strong aria-hidden="true">3.5.</strong> მართვის ნაკადი (Control Flow)</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch04-00-understanding-ownership.html"><strong aria-hidden="true">4.</strong> Ownership-ის გააზრება</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch04-01-what-is-ownership.html"><strong aria-hidden="true">4.1.</strong> რა არის Ownership-ი?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch04-02-references-and-borrowing.html"><strong aria-hidden="true">4.2.</strong> Reference-ები და Borrowing-ი</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch04-03-slices.html"><strong aria-hidden="true">4.3.</strong> Slice-ის ტიპი</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch05-00-structs.html"><strong aria-hidden="true">5.</strong> Struct-ების გამოყენება დაკავშირებული მონაცემების დასასტრუქტურებლად</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch05-01-defining-structs.html"><strong aria-hidden="true">5.1.</strong> Struct-ების განსაზღვრა და ინსტანცირება</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch05-02-example-structs.html"><strong aria-hidden="true">5.2.</strong> მაგალითი Struct-ების გამოყენებით</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch05-03-method-syntax.html"><strong aria-hidden="true">5.3.</strong> მეთოდები</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch06-00-enums.html"><strong aria-hidden="true">6.</strong> Enum-ები და Pattern Matching-ი</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch06-01-defining-an-enum.html"><strong aria-hidden="true">6.1.</strong> Enum-ის განსაზღვრა</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch06-02-match.html"><strong aria-hidden="true">6.2.</strong> match კონსტრუქცია</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch06-03-if-let.html"><strong aria-hidden="true">6.3.</strong> მოკლე მართვის ნაკადი if let-ით და let...else-ით</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch07-00-managing-growing-projects-with-packages-crates-and-modules.html"><strong aria-hidden="true">7.</strong> Package-ები, Crate-ები და მოდულები</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch07-01-packages-and-crates.html"><strong aria-hidden="true">7.1.</strong> Package-ები და Crate-ები</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch07-02-defining-modules-to-control-scope-and-privacy.html"><strong aria-hidden="true">7.2.</strong> Scope-ისა და ექსპორტის (Privacy) მართვა მოდულებით</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch07-03-paths-for-referring-to-an-item-in-the-module-tree.html"><strong aria-hidden="true">7.3.</strong> Path-ები მოდულების ხეში ელემენტების მისათითებლად</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch07-04-bringing-paths-into-scope-with-the-use-keyword.html"><strong aria-hidden="true">7.4.</strong> Path-ების შემოტანა Scope-ში use საკვანძო სიტყვით</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch07-05-separating-modules-into-different-files.html"><strong aria-hidden="true">7.5.</strong> მოდულების განცალკევება სხვადასხვა ფაილში</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch08-00-common-collections.html"><strong aria-hidden="true">8.</strong> ხშირად გამოყენებადი კოლექციები</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch08-01-vectors.html"><strong aria-hidden="true">8.1.</strong> მნიშვნელობების სიის შენახვა Vector-ებით</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch08-02-strings.html"><strong aria-hidden="true">8.2.</strong> UTF-8 ტექსტის შენახვა String-ებით</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch08-03-hash-maps.html"><strong aria-hidden="true">8.3.</strong> Key-Value წყვილების შენახვა Hash Map-ებში</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch09-00-error-handling.html"><strong aria-hidden="true">9.</strong> შეცდომების დამუშავება (Error Handling)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch09-01-unrecoverable-errors-with-panic.html"><strong aria-hidden="true">9.1.</strong> აღუდგენელი შეცდომები panic!-ით</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch09-02-recoverable-errors-with-result.html"><strong aria-hidden="true">9.2.</strong> აღდგენადი შეცდომები Result-ით</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch09-03-to-panic-or-not-to-panic.html"><strong aria-hidden="true">9.3.</strong> გამოვიყენოთ თუ არა panic!</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch10-00-generics.html"><strong aria-hidden="true">10.</strong> Generic ტიპები, Trait-ები და Lifetime-ები</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch10-01-syntax.html"><strong aria-hidden="true">10.1.</strong> Generic მონაცემთა ტიპები</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch10-02-traits.html"><strong aria-hidden="true">10.2.</strong> საერთო ქცევის განსაზღვრა Trait-ებით</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch10-03-lifetime-syntax.html"><strong aria-hidden="true">10.3.</strong> Reference-ების ვალიდაცია Lifetime-ებით</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch11-00-testing.html"><strong aria-hidden="true">11.</strong> ავტომატიზებული ტესტების დაწერა</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch11-01-writing-tests.html"><strong aria-hidden="true">11.1.</strong> როგორ დავწეროთ ტესტები</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch11-02-running-tests.html"><strong aria-hidden="true">11.2.</strong> ტესტების გაშვების პროცესის მართვა</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch11-03-test-organization.html"><strong aria-hidden="true">11.3.</strong> ტესტების ორგანიზება</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch12-00-an-io-project.html"><strong aria-hidden="true">12.</strong> I/O პროექტი: Command Line პროგრამის აგება</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch12-01-accepting-command-line-arguments.html"><strong aria-hidden="true">12.1.</strong> Command Line არგუმენტების მიღება</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch12-02-reading-a-file.html"><strong aria-hidden="true">12.2.</strong> ფაილის წაკითხვა</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch12-03-improving-error-handling-and-modularity.html"><strong aria-hidden="true">12.3.</strong> რეფაქტორინგი მოდულურობისა და შეცდომების დამუშავების გაუმჯობესებისთვის</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch12-04-testing-the-librarys-functionality.html"><strong aria-hidden="true">12.4.</strong> ფუნქციონალის დამატება Test-Driven Development (TDD)-ით</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch12-05-working-with-environment-variables.html"><strong aria-hidden="true">12.5.</strong> გარემოს ცვლადებთან (Environment Variables) მუშაობა</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch12-06-writing-to-stderr-instead-of-stdout.html"><strong aria-hidden="true">12.6.</strong> შეცდომების გადამისამართება Standard Error-ში</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch13-00-functional-features.html"><strong aria-hidden="true">13.</strong> ფუნქციონალური პროგრამირების შესაძლებლობები: Iterator-ები და Closure-ები</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch13-01-closures.html"><strong aria-hidden="true">13.1.</strong> Closure-ები</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch13-02-iterators.html"><strong aria-hidden="true">13.2.</strong> ელემენტების მიმდევრობის დამუშავება Iterator-ებით</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch13-03-improving-our-io-project.html"><strong aria-hidden="true">13.3.</strong> ჩვენი I/O პროექტის გაუმჯობესება</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch13-04-performance.html"><strong aria-hidden="true">13.4.</strong> წარმადობა: ციკლები Iterator-ების წინააღმდეგ</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch14-00-more-about-cargo.html"><strong aria-hidden="true">14.</strong> მეტი Cargo-სა და Crates.io-ს შესახებ</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch14-01-release-profiles.html"><strong aria-hidden="true">14.1.</strong> Build-ების მორგება Release Profile-ებით</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch14-02-publishing-to-crates-io.html"><strong aria-hidden="true">14.2.</strong> Crate-ის გამოქვეყნება Crates.io-ზე</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch14-03-cargo-workspaces.html"><strong aria-hidden="true">14.3.</strong> Cargo Workspace-ები</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch14-04-installing-binaries.html"><strong aria-hidden="true">14.4.</strong> Binary-ების დაინსტალირება cargo install-ით</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch14-05-extending-cargo.html"><strong aria-hidden="true">14.5.</strong> Cargo-ს გაფართოება ინდივიდუალური ბრძანებებით</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch15-00-smart-pointers.html"><strong aria-hidden="true">15.</strong> Smart Pointer-ები</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch15-01-box.html"><strong aria-hidden="true">15.1.</strong> Box&lt;T&gt;-ის გამოყენება Heap-ზე არსებულ მონაცემებზე მისათითებლად</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch15-02-deref.html"><strong aria-hidden="true">15.2.</strong> Smart Pointer-ების გამოყენება ჩვეულებრივი Reference-ების მსგავსად</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch15-03-drop.html"><strong aria-hidden="true">15.3.</strong> კოდის გაშვება გასუფთავებისას Drop Trait-ით</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch15-04-rc.html"><strong aria-hidden="true">15.4.</strong> Rc&lt;T&gt;: Reference Counted Smart Pointer-ი</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch15-05-interior-mutability.html"><strong aria-hidden="true">15.5.</strong> RefCell&lt;T&gt; და Interior Mutability Pattern-ი</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch15-06-reference-cycles.html"><strong aria-hidden="true">15.6.</strong> Reference-ების ციკლებმა შეიძლება გამოიწვიოს მეხსიერების გაჟონვა (Memory Leak)</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch16-00-concurrency.html"><strong aria-hidden="true">16.</strong> უშიშარი კონკურენტულობა (Fearless Concurrency)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch16-01-threads.html"><strong aria-hidden="true">16.1.</strong> ნაკადების (Thread-ების) გამოყენება კოდის ერთდროულად გასაშვებად</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch16-02-message-passing.html"><strong aria-hidden="true">16.2.</strong> მონაცემების გადაცემა ნაკადებს შორის Message Passing-ით</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch16-03-shared-state.html"><strong aria-hidden="true">16.3.</strong> Shared-State კონკურენტულობა</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch16-04-extensible-concurrency-sync-and-send.html"><strong aria-hidden="true">16.4.</strong> გაფართოებადი კონკურენტულობა Send და Sync Trait-ებით</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch17-00-async-await.html"><strong aria-hidden="true">17.</strong> ასინქრონული პროგრამირების საფუძვლები: Async, Await, Future-ები და Stream-ები</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch17-01-futures-and-syntax.html"><strong aria-hidden="true">17.1.</strong> Future-ები და Async სინტაქსი</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch17-02-concurrency-with-async.html"><strong aria-hidden="true">17.2.</strong> კონკურენტულობის გამოყენება Async-ით</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch17-03-more-futures.html"><strong aria-hidden="true">17.3.</strong> ნებისმიერი რაოდენობის Future-ებთან მუშაობა</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch17-04-streams.html"><strong aria-hidden="true">17.4.</strong> Stream-ები: Future-ები მიმდევრობაში</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch17-05-traits-for-async.html"><strong aria-hidden="true">17.5.</strong> Async Trait-ების სიღრმისეული განხილვა</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch17-06-futures-tasks-threads.html"><strong aria-hidden="true">17.6.</strong> Future-ები, Task-ები და ნაკადები (Thread-ები)</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch18-00-oop.html"><strong aria-hidden="true">18.</strong> ობიექტზე ორიენტირებული პროგრამირების შესაძლებლობები</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch18-01-what-is-oo.html"><strong aria-hidden="true">18.1.</strong> ობიექტზე ორიენტირებული ენების მახასიათებლები</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch18-02-trait-objects.html"><strong aria-hidden="true">18.2.</strong> Trait Object-ების გამოყენება საერთო ქცევის აბსტრაქციისთვის</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch18-03-oo-design-patterns.html"><strong aria-hidden="true">18.3.</strong> ობიექტზე ორიენტირებული Design Pattern-ის იმპლემენტაცია</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch19-00-patterns.html"><strong aria-hidden="true">19.</strong> Pattern-ები და Matching-ი</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch19-01-all-the-places-for-patterns.html"><strong aria-hidden="true">19.1.</strong> ყველა ადგილი, სადაც შეიძლება Pattern-ების გამოყენება</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch19-02-refutability.html"><strong aria-hidden="true">19.2.</strong> Refutability: შეიძლება თუ არა Pattern-ი არ დაემთხვეს</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch19-03-pattern-syntax.html"><strong aria-hidden="true">19.3.</strong> Pattern-ის სინტაქსი</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch20-00-advanced-features.html"><strong aria-hidden="true">20.</strong> გაფართოებული (Advanced) შესაძლებლობები</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch20-01-unsafe-rust.html"><strong aria-hidden="true">20.1.</strong> Unsafe Rust-ი</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch20-02-advanced-traits.html"><strong aria-hidden="true">20.2.</strong> გაფართოებული Trait-ები</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch20-03-advanced-types.html"><strong aria-hidden="true">20.3.</strong> გაფართოებული ტიპები</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch20-04-advanced-functions-and-closures.html"><strong aria-hidden="true">20.4.</strong> გაფართოებული ფუნქციები და Closure-ები</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch20-05-macros.html"><strong aria-hidden="true">20.5.</strong> მაკროსები</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch21-00-final-project-a-web-server.html"><strong aria-hidden="true">21.</strong> საბოლოო პროექტი: მრავალნაკადიანი (Multithreaded) ვებ სერვერის აგება</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch21-01-single-threaded.html"><strong aria-hidden="true">21.1.</strong> ერთნაკადიანი ვებ სერვერის აგება</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch21-02-multithreaded.html"><strong aria-hidden="true">21.2.</strong> ერთნაკადიანიდან მრავალნაკადიან სერვერზე გადასვლა</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch21-03-graceful-shutdown-and-cleanup.html"><strong aria-hidden="true">21.3.</strong> Graceful Shutdown და გასუფთავება</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix-00.html"><strong aria-hidden="true">22.</strong> დანართი (Appendix)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix-01-keywords.html"><strong aria-hidden="true">22.1.</strong> A - საკვანძო სიტყვები (Keywords)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix-02-operators.html"><strong aria-hidden="true">22.2.</strong> B - ოპერატორები და სიმბოლოები</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix-03-derivable-traits.html"><strong aria-hidden="true">22.3.</strong> C - Derivable Trait-ები</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix-04-useful-development-tools.html"><strong aria-hidden="true">22.4.</strong> D - სასარგებლო დეველოპერული ინსტრუმენტები</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix-05-editions.html"><strong aria-hidden="true">22.5.</strong> E - გამოცემები (Editions)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix-06-translation.html"><strong aria-hidden="true">22.6.</strong> F - წიგნის თარგმანები</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix-07-nightly-rust.html"><strong aria-hidden="true">22.7.</strong> G - როგორ იქმნება Rust-ი და “Nightly Rust-ი”</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        const sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

