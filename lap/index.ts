class NhanVien {
    hoTen: string;
  
    constructor(hoTen: string) {
      this.hoTen = hoTen
    }
  
    tinhLuong(): number {
      console.log('tinh luong');
      return 0;
    }
  }
  
  
  class NhanVienFullTime extends NhanVien {
    private luongCoban: number;
  
    constructor(hoTen: string, luongCoban: number) {
      super(hoTen);
      this.luongCoban = luongCoban;
    }
  
    tinhLuong(): number {
      return this.luongCoban * 1.2;
    }
  }
  
  class NhanVienParttime extends NhanVien {
    private soGioLam: number;
    private luongTheoGio: number;
  
    constructor(hoTen: string, soGioLam: number, luongTheoGio: number) {
      super(hoTen);
      this.soGioLam = soGioLam;
      this.luongTheoGio = luongTheoGio;
    }
  
    tinhLuong(): number {
      return this.soGioLam * this.luongTheoGio;
    }
  }
  
  
  const nhanVien1: NhanVien = new NhanVienFullTime("Le ngoc anh", 1000);
  const nhanVien2: NhanVien = new NhanVienParttime("Thuy Huu", 10, 20);
  const nhanVien3: NhanVien = new NhanVienParttime("khang", 10, 20);
  