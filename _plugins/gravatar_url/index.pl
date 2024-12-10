use strict;

my $dir = __FILE__;
$dir =~ s/\index.pl$/lib/;
unshift @INC, $dir;
