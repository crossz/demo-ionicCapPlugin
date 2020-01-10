
  Pod::Spec.new do |s|
    s.name = 'ZxCap'
    s.version = '0.0.1'
    s.summary = 'Zx capacitor plugin demo'
    s.license = 'MIT'
    s.homepage = 'https://github.com/crossz/demo-ionicCapPlugin'
    s.author = 'zx'
    s.source = { :git => 'https://github.com/crossz/demo-ionicCapPlugin', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end