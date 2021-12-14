mkdir tmpdir
tar xfz ./custom-native-extension-0.0.1.tgz -C tmpdir/

mkdir newdir
find tmpdir/ -type f -exec mv -i {} newdir/. \;

tar zcvf custom-native-extension-0.0.2.tgz newdir/

rm -rf tmpdir
rm -rf newdir
