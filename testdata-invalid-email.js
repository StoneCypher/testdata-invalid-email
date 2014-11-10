
/* jshint node: true */
/* eslint max-len: 0 */
/* eslint-env node, browser */

module.exports = [

    // let's start with the excellent list from
    // https://fightingforalostcause.net/content/misc/2006/compare-email-regex.php

    "first.last@sub.do,com",
    "first\\@last@iana.org",
    "123456789012345678901234567890123456789012345678901234567890@12345678901234567890123456789012345678901234 [...]",
    "first.last",
    "12345678901234567890123456789012345678901234567890123456789012345@iana.org",
    ".first.last@iana.org",
    "first.last.@iana.org",
    "first..last@iana.org",
    "\"first\"last\"@iana.org",
    "\"\"\"@iana.org",
    "\"\\\"@iana.org",
    "\"\"@iana.org",
    "first\\@last@iana.org",
    "first.last@",
    "x@x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23 [...]",
    "first.last@[.12.34.56.78]",
    "first.last@[12.34.56.789]",
    "first.last@[::12.34.56.78]",
    "first.last@[IPv5:::12.34.56.78]",
    "first.last@[IPv6:1111:2222:3333:4444:5555:12.34.56.78]",
    "first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777:12.34.56.78]",
    "first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777]",
    "first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777:8888:9999]",
    "first.last@[IPv6:1111:2222::3333::4444:5555:6666]",
    "first.last@[IPv6:1111:2222:333x::4444:5555]",
    "first.last@[IPv6:1111:2222:33333::4444:5555]",
    "first.last@-xample.com",
    "first.last@exampl-.com",
    "first.last@x234567890123456789012345678901234567890123456789012345678901234.iana.org",
    "abc\\@def@iana.org",
    "abc\\@iana.org",
    "Doug\\ \\\"Ace\\\"\\ Lovell@iana.org",
    "abc@def@iana.org",
    "abc\\@def@iana.org",
    "abc\\@iana.org",
    "@iana.org",
    "doug@",
    "\"qu@iana.org",
    "ote\"@iana.org",
    ".dot@iana.org",
    "dot.@iana.org",
    "two..dot@iana.org",
    "\"Doug \"Ace\" L.\"@iana.org",
    "Doug\\ \\\"Ace\\\"\\ L\\.@iana.org",
    "hello world@iana.org",
    "gatsby@f.sc.ot.t.f.i.tzg.era.l.d.",
    "test.iana.org",
    "test.@iana.org",
    "test..test@iana.org",
    ".test@iana.org",
    "test@test@iana.org",
    "test@@iana.org",
    "-- test --@iana.org",
    "[test]@iana.org",
    "\"test\"test\"@iana.org",
    "()[]\\;:,><@iana.org",
    "test@.",
    "test@example.",
    "test@.org",
    "test@1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890 [...]",
    "test@[123.123.123.123",
    "test@123.123.123.123]",
    "NotAnEmail",
    "@NotAnEmail",
    "\"test\"blah\"@iana.org",
    ".wooly@iana.org",
    "wo..oly@iana.org",
    "pootietang.@iana.org",
    ".@iana.org",
    "Ima Fool@iana.org",
    "phil.h\\@\\@ck@haacked.com",
    "foo@[\\1.2.3.4]",
    "first.\"\".last@iana.org",
    "first\\last@iana.org",
    "Abc\\@def@iana.org",
    "Fred\\ Bloggs@iana.org",
    "Joe.\\Blow@iana.org",
    "first.last@[IPv6:1111:2222:3333:4444:5555:6666:12.34.567.89]",
    "{^c\\@**Dog^}@cartoon.com",
    "\"foo\"(yay)@(hoopla)[1.2.3.4]",
    "cal(foo(bar)@iamcal.com",
    "cal(foo)bar)@iamcal.com",
    "cal(foo\\)@iamcal.com",
    "first(12345678901234567890123456789012345678901234567890)last@(123456789012345678901234567890123456789012 [...]",
    "first(middle)last@iana.org",
    "first(abc(\"def\".ghi).mno)middle(abc(\"def\".ghi).mno).last@(abc(\"def\".ghi).mno)example(abc(\"def\".ghi).mno). [...]",
    "a(a(b(c)d(e(f))g)(h(i)j)@iana.org",
    ".@",
    "@bar.com",
    "@@bar.com",
    "aaa.com",
    "aaa@.com",
    "aaa@.123",
    "aaa@[123.123.123.123]a",
    "aaa@[123.123.123.333]",
    "a@bar.com.",
    "a@-b.com",
    "a@b-.com",
    "-@..com",
    "-@a..com",
    "invalid@about.museum-",
    "test@...........com",
    "\"Unicode NULL \"@char.com",
    "Unicode NULL @char.com",
    "first.last@[IPv6::]",
    "first.last@[IPv6::::]",
    "first.last@[IPv6::b4]",
    "first.last@[IPv6::::b4]",
    "first.last@[IPv6::b3:b4]",
    "first.last@[IPv6::::b3:b4]",
    "first.last@[IPv6:a1:::b4]",
    "first.last@[IPv6:a1:]",
    "first.last@[IPv6:a1:::]",
    "first.last@[IPv6:a1:a2:]",
    "first.last@[IPv6:a1:a2:::]",
    "first.last@[IPv6::11.22.33.44]",
    "first.last@[IPv6::::11.22.33.44]",
    "first.last@[IPv6:a1:11.22.33.44]",
    "first.last@[IPv6:a1:::11.22.33.44]",
    "first.last@[IPv6:a1:a2:::11.22.33.44]",
    "first.last@[IPv6:0123:4567:89ab:cdef::11.22.33.xx]",
    "first.last@[IPv6:0123:4567:89ab:CDEFF::11.22.33.44]",
    "first.last@[IPv6:a1::a4:b1::b4:11.22.33.44]",
    "first.last@[IPv6:a1::11.22.33]",
    "first.last@[IPv6:a1::11.22.33.44.55]",
    "first.last@[IPv6:a1::b211.22.33.44]",
    "first.last@[IPv6:a1::b2::11.22.33.44]",
    "first.last@[IPv6:a1::b3:]",
    "first.last@[IPv6::a2::b4]",
    "first.last@[IPv6:a1:a2:a3:a4:b1:b2:b3:]",
    "first.last@[IPv6::a2:a3:a4:b1:b2:b3:b4]",
    "first.last@[IPv6:a1:a2:a3:a4::b1:b2:b3:b4]"

];
